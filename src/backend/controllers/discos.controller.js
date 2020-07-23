const Disco = require('../models/discos.model.js');

// cria e salva novo disco
exports.create = (req, res) => {
    // valida request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Campos não podem ser vazios!"
        });
    }

    // cria disco
    const disco = new Disco({
        titulo: req.body.titulo, 
        artista: req.body.artista,
        ano: req.body.ano,
        genero: req.body.genero,
        gravadora: req.body.gravadora
    });

    // salva disco na db
    disco.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocorreu algum erro ao criar o disco!"
        });
    });
};

// Retorna todos os discos da db
exports.findAll = (req, res) => {
    Disco.find()
    .then(disco => {
        res.send(disco);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocorreu algum erro ao procurar os discos!"
        });
    });
};

// procura um disco com discoId
exports.findOne = (req, res) => {
    Disco.find(req.params.discoId)
    .then(disco => {
        if(!disco) {
            return res.status(404).send({
                message: "ID não encontrado: " + req.params.discoId
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "ID não encontrado: " + req.params.discoId
            });                
        }
        return res.status(500).send({
            message: "Erro ao biscar ID" + req.params.discoId
        });
    });
};
