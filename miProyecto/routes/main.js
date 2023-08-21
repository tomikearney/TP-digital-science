/*Variable que requiera*/
var express = require('express');

/* Configura el sistema de ruteo*/
var router = express.Router();

/*Requiero mainController desde controllers */
var mainController = require('../controllers/mainController');


/* GET home page. Funcionalidad */
router.get('/', mainController.bienvenida);

module.exports = router;
