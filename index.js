const express = require('express')
const app = express()
//creamos la instancia de keycloak
const keycloak = require('./config/keycloak-config.js').initKeycloak();
app.use(keycloak.middleware());

const testController = require('./controller/test-controller.js')
app.use('/test', testController) //actua como middleware

app.get('/', function(req, res){
    res.send('Server running');
})

app.listen(3001);
