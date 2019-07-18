module.exports = function(app){

    app.get('/', function(req , res) {
        let persona = {
            "nombre":"Fabian",
            "edad": 27
        };
        res.send(persona);
    });

    app.post('/personas', function(req,res){
        let nombre = req.body.nombre;
        let edad = req.body.edad;
        let mipersona = {
            "nombre_" : nombre,
            "edad_"   : edad
        }
        res.send(mipersona);
    });
    

}

