let Cliente = require('../modelos/cliente.js');//IMportamos la clase modelo
//Creamos la clase controladora para manjar la informacion de los clientes
class ClienteControlador {
    constructor() {   
    }
    //Funcion encargada de manejar la consulta de un cliente por id
    consultaCliente(req, res) {
        let id = req.params.id;
        Cliente.consultarCliente(id, (err, data) => {
                if(data){
                    res.json(data);
                }else{
                    res.send(err);
                }
            })
    }
    // Funcion encargada de manejar al consulta de todos los clientes de la base de datos
    consultaClientes(req, res) {
        Cliente.consultarClientes((err, data) => {
                if(data){
                    res.json(data);
                }else{
                    res.send(err);
                }
            })
    }  

    crearCliente(req, res){
        let nombre = req.params.nombre;
        let documento = req.params.documento;
        let profesion = req.params.profesion;
        Cliente.crearCliente(nombre, documento, profesion, (err, data)=>{
            if(err){
                res.send(err);
            }else{
                res.json({
                    respuesta : data
                });
            }
        });

    }
}
const instanciaControlador = new ClienteControlador();
module.exports  = instanciaControlador;