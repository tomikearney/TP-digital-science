const science = require("../db/science")

const heroeController = {
    index: function(req, res) {
        return res.render("heroes", {lista: science.lista, title: "Nombre héroes"})
    },
    detalle: function(req, res) {
        let ingresoId = req.params.id;
        let cientifico = []
        for (let i = 0; i < science.lista.length; i++) {
            if (ingresoId == science.lista[i].id) {
                cientifico.push(science.lista[i].nombre)
                cientifico.push(science.lista[i].profesion)
            }   
        }
        return res.render("heroesDetalle", {array: cientifico, title: "Detalle héroes"})
    }, 
    bio: function(req, res) {
        let ingresoId = req.params.id;
        let ingresoConfirmacion = req.params.ok
        let cientifico = []
        for (let i = 0; i < science.lista.length; i++) {
            if (ingresoId == science.lista[i].id) {
                cientifico.push(science.lista[i].nombre)
                cientifico.push(science.lista[i].resenia)
            }   
        }
        return res.render("heroesBio", {array: cientifico, title: "Detalle con bio", confirmacion: ingresoConfirmacion})
    }
}

module.exports = heroeController