const {response} = require('express'); 

const usuariosGet = (req, res = response)=> {
    res.json({'msg':'get API - CONTROLADOR'})
}

const usuariosPost = (req, res = response)=> {
    const {nombre, edad} = req.body;
    res.json({'msg':'post API - CONTROLADOR',
             nombre, edad
            })
}

const usuariosDelete = (req, res = response)=> {
    res.json({'msg':'delete API - CONTROLADOR'})
}

const usuariosPut = (req, res = response)=> {
    const id = req.params.id;
    res.json({'msg':'put API - CONTROLADOR', id})
}

module.exports = {usuariosGet,
                 usuariosPost,
                 usuariosDelete,
                 usuariosPut}

