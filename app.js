const express = require('express');
const app = express();
const {PORT} = require('./src/config');

app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));



app.use('/',require('./router'));


app.listen(PORT,()=>{
    console.log('SERVER corriendo en ' + PORT);
});