const Modal = require("../models/index");
const bcrypt = require("bcryptjs");

const User = Modal.User;

const AddUsers = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ where: { email } });
    if (userExist != null) {
      res.json("user alredy exist");
    } else {
      const hashPassword = bcrypt.hashSync(password, 4);

      const user = await User.create({ email, password: hashPassword });
      res
        .status(201)
        .json({ message: "User signed in successfully", success: true, user });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getUsers = async (req, res) => {
  try {


    const userExist1 = await User.findOne({ where: req.body });
    if(userExist1){
    res.status(200).json(userExist1);}else{
        res.json('user not exist')
    }
  } catch (error) {
    console.error(error ,"user not exist");
    res.status(500).json({ error: "Internal server error" });
  }
};

const edituser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, password } = req.body;

    const userUpdate = await User.findByPk(id);

    if (!userUpdate) {
      return res.status(404).json({ error: "Record not found" });
    }

    userUpdate.email = email;
    userUpdate.password = password;
    await userUpdate.save();
    return res
      .status(200)
      .json({ message: "Record updated successfully", record: userUpdate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const userUpdate = await User.findByPk(id);

    if (!userUpdate) {
      return res.status(404).json({ error: "Record not found" });
    }

    await userUpdate.destroy();
    return res
      .status(200)
      .json({ message: "Record deleted", record: userUpdate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { AddUsers, getUsers, edituser, deleteUser };
