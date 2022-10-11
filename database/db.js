const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'containers-us-west-98.railway.app',
    user: 'root',
    password: 'K2CbuvgokaOmKvh8jedI',
    database: 'railway',
    port: 7964
})

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('Si se conecto a la BD 😊');
})

module.exports = conexion;
