var express = require('express');
var router = express.Router();
const heroeController = require("../controllers/heroeController")

/* GET users listing. */
router.get('/', heroeController.index);

router.get('/detalle/:id', heroeController.detalle);


module.exports = router;
