//config port
const port  = process.env.PORT || 3000;

//Config Server Express
const express = require ('express')
const app = express()



app.use(express.static(__dirname + '/public'))

app.listen(port , () => {
    console.log('Servidor escuchando en puerto: ', port)
})