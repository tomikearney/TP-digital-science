var express = require('express');
var router = express.Router();
const heroeController = require("../controllers/heroeController")

/* GET users listing. */

//Mostrar una lista con los nombre de las personalidades.

router.get('/', heroeController.index);

//Mostrar una vista:
router.get('/detalle/:id', heroeController.detalle);

//Mostrar una vista:
router.get('/bio/id/:id/:ok?', heroeController.bio);

//Mostrar créditos:
router.get('/creditos/', heroeController.creditos )
module.exports = router;
