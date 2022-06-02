var express = require("express");
var router = express.Router();

var recordesController = require("../controllers/recordesController");

router.post("/novoTempo", function (req, res) {
    recordesController.novoTempo(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    recordesController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;