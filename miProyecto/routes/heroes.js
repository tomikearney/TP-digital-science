var express = require('express');
var router = express.Router();
const heroeController = require("../controllers/heroeController")

/* GET users listing. */

//Mostrar una lista con los nombre sde las personalidades.

router.get('/', heroeController.index);

//Mostrar una vista con el texto sig:
router.get('/detalle/:id', heroeController.detalle);


module.exports = router;
