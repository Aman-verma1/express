const express = require("express");
const { AddUsers, getUsers, edituser, deleteUser } = require("../Apis/api");
const route = express.Router();

route.post("/api", AddUsers);
route.get("/api", getUsers);
route.put("/api/:id", edituser);
route.delete("/api/:id", deleteUser);

module.exports = route;
