//var express = require('express');
import express from 'express' ;
//var produitApiRoutes = require('./produit-api-routes');
import produitApiRoutes from './produit-api-routes-memory.js';
import deviseApiRoutes from './devise-api-routes-memory.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
var app = express();
//support parsing of JSON post data
var jsonParser = express.json({ extended: true}); 
app.use(jsonParser);
//les routes en /html/... seront gérées par express
//par de simples renvois des fichiers statiques du répertoire "./html"
app.use('/html', express.static(__dirname+"/html"));
app.get('/', function(req , res ) {
 res.redirect('/html/index.html');
});
//delegate REST API routes to apiRouter(s) :
app.use(produitApiRoutes.apiRouter); 
app.use(deviseApiRoutes.apiRouter); 
//app.use(otherApiRoutes.apiRouter);
app.listen(8282 , function () {
 console.log("http://localhost:8282");
});