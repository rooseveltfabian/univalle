const db = require('../../bd/bd');//Impostamos conexion a la base de datos
const sql = db.connection;//Instanciamos conexion para usar con las consultas

//Creamos un objeto de la tabla para proteger y enmascarar los nombres de la base de datos
const table = {
    name    :"transacciones",    
    fields  : {
        _tk       : "tk",
        _cliente  : "cliente",
        _cuenta   : "cuenta",
        _tipo     : "tipo",
        _monto    : "monto"
    }
}
//Creamos la clase Cliente para empezar a crear las respectivas funcionalidades.
class Transaccion {
    //PAsamos las variables globales por referencia
    constructor(_tk,_cliente, _cuenta, _tipo, _monto) {
         if (_tk) {
            this._tk     = _tk;    
        }     
        this._cliente  = _cliente;
        this._cuenta  = _cuenta;
        this._tipo = _tipo;
    }
    //Funcion encargada de Mapear los campos de la base de datos en el orden que estan segun la super clase, con el fin de enmascarar los campos de la base de datos
    static mapFactory(entity){
        let mp = {};
        if(entity){
            mp = new Transaccion(
                entity.tk,
                entity.cliente,
                entity.cuenta,
                entity.tipo,
                entity.monto
            );
        }        
        return mp;
    }
    //Funcion que consulta un cliente segun el id de la base de datos
    static consultarTransaccion(_tk, callback) {
        //Armamos la consulta segn los parametros que necesitemos
        let query = 'SELECT * ';
        query += 'FROM '+table.name+' ';
        query += 'WHERE '+table.fields._tk+'='+_tk+';';   
        //Verificamos la conexion
        if(sql){
            sql.query(query, (err, result) => {
                if(err){
                    throw err;
                }else{     
                    let transaccion = Transaccion.mapFactory(result[0]);                                                                                          
                    console.log(transaccion);                          
                    callback(null,transaccion);
                }
            })
        }else{
            throw "Problema conectado con Mysql en consultarTransaccion";
        } 
    }
    //Funcion encargada de consultar todos los clientes de la base de datos
    static consultarTransacciones(callback) {
        //Armamos la consulta segn los parametros que necesitemos
        let query = 'SELECT * ';
        query += 'FROM '+table.name+';';   
        //Verificamos la conexion
        if(sql){
            sql.query(query, (err, result) => {
                if(err){
                    throw err;
                }else{     
                    let transacciones = [];
                    for(let entity of result){
                        let transaccion = Transaccion.mapFactory(entity);                        
                        transacciones.push(transaccion);
                    }                                              
                    console.log(transacciones);                          
                    callback(null,transacciones);
                }
            })
        }else{
            throw "Problema conectado con Mysql";
        } 
    }
}

module.exports = Transaccion;