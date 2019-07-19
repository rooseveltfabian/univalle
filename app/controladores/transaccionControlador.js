let Transaccion = require('../modelos/transaccion');//IMportamos la clase modelo
//Creamos la clase controladora para manjar la informacion de los clientes
class TransaccionControlador {
    constructor() {   
    }
    //Funcion encargada de manejar la consulta de un cliente por id
    consultaTransaccion(req, res) {
        let _tk = req.params._tk;
        Transaccion.consultarTransaccion(_tk, (err, data) => {
                if(data){
                    res.json(data);
                }else{
                    res.send(err);
                }
            })
    }
    // Funcion encargada de manejar al consulta de todos los clientes de la base de datos
    consultaTransacciones(req, res) {
        Transaccion.consultarTransacciones((err, data) => {
                if(data){
                    res.json(data);
                }else{
                    res.send(err);
                }
            })
    }  
}
const instanciaControlador = new TransaccionControlador();
module.exports  = instanciaControlador;