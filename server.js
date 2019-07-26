const express    = require('express');
const bodyParser = require('body-parser');
//Instanciamos express como servidor para emepzar a utilizar su potencia
const app = express();
//Uso de Body Parser Para manejo de la informacion que viaja por las peticiones http al servidor
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

//Importamos la libreria o modulo router mandandole como parametro la instancia de servidor express
require('./api/router.js')(app);
//Iniciamos el servidor escuchando por un puerto  
app.listen(9000, function(){
    console.log('EL servidor esta corriendo por el puerto 9000');
});