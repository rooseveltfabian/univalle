const mysql = require('mysql');


class DB{
    constructor(){
        if(!DB.instancia){
            DB.instancia = this;
            this.connection = mysql.createConnection({
                host: '127.0.0.1',
                user: 'root',
                password: '',
                database: ''
            });
            this.connection.connect((err)=>{
                if(err){throw err}
            });
            console.log('entro a conectar');
        }
        console.log('encontro una instanciaa');
        return DB.instancia;
    }
} 
const instancia = new DB();
Object.freeze(instancia);

module.exports = instancia;