const science = require("../db/science")

const heroeController = {
    index: function(req, res) {
        return res.render("heroes", {lista: science.lista, title: "Nombre personajes"})
    },
    detalle: function(req, res) {
        id = req.params.id
        for (let i = 0; i < science.lista.length; i++) {
            if (id == science.lista[i].id) {
                return res.send(`Hola, mi nombre es ${science.lista[i].nombre} y soy ${science.lista[i].profesion}`)
            } else {
                return res.send("No encontramos al científico indicado. Por favor, elija otro id")
            }
                        
        }
    }


}

module.exports = heroeController