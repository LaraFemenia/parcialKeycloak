//configuración de la conexion entre servidor de node y servidos de keycloak
const session = require('express-session')
const keycloak = require('keycloak-connect')

let _keycloak

var keycloakConfig = {
    clientId: 'nodejs-microservice',
    bearerOnly: true,
    serverUrl: 'http://localhost:8080/auth',
    realm: 'Demo-programacion',
    credentials: {
        secret: '8e00c873-733d-4196-aa80-fc7693ff69fc'
    }
};

function initKeycloak() {
    if (_keycloak){
        console.warn("Triying to init Keycloak again!");
        return _keycloak;
    }else{
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new keycloak({ store:memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak(){
    if(!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    }
    return _keycloak;
}

module.exports={
    initKeycloak,
    getKeycloak
}