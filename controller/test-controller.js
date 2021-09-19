const express = require('express')
const router = express.Router()
const keycloak = require('../config/keycloak-config.js').getKeycloak(); //obtenemos la instancia creada

router.get('/anonymous',function(req,res){
    res.send('Hi anonymous!');
})

router.get('/user', keycloak.protect('User') ,function(req,res){
    res.send('Hi user!')
})
router.get('/admin', keycloak.protect('Admin'),function(req,res){
    res.send('Hi admin!')
})
router.get('/all-user',keycloak.protect(['User','Admin']),function(req,res){
    res.send('Hi all-user!')
})

module.exports = router