const express = require("express");
const router = express.Router();
const controller = require("../controllers/toDoControllers");

router.get("/", controller.getAll)
router.get("/nomes", controller.getByName)
router.get("/:id", controller.getById)

router.post("/cadastrar", controller.novoContatinho)

router.delete("/:id", controller.deletarContato)

module.exports = router;