const express = require("express");
const routeur = express.Router();
const usersCtrl = require("../controllers/user.js");

// routes
routeur.get("/", usersCtrl.getAllUser);
routeur.get("/:id", usersCtrl.getOneUser);
routeur.post("/", usersCtrl.createUser);
routeur.put("/:id", usersCtrl.updateUser);
routeur.delete("/:id", usersCtrl.deleteUser);
routeur.delete("/", usersCtrl.deleteAllUser);

// export
module.exports = routeur;
