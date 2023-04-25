console.log("tpNode");
import os from 'node:os';
import calculModule from "./calcul.js";
import express from 'express';  //nécessite npm install -s express
var x=6;
var y = calculModule.multiplierPar2(x);
//y = calculModule.addition(x,7); //pas possible d'appeler addition() si pas exportée 
console.log("y=x*2=" + y);

calculModule.enchainerCalculEtAffichage(25 , 
                                       (v)=>2*v , 
                                       (chose) => console.log("2*25=" + chose) );

calculModule.enchainerCalculEtAffichage(80, 
                                        (x)=>x/2 , 
                                        (resCalcul) => console.log("80 divisé par 2=" + resCalcul) );                                       

/*
console.log(`os name is ${os.type()}`); //ex: Windows_NT or Linux or ...
console.log(`os platform is ${os.platform()}`); //ex: Win32 or ...
console.log(`user home directory is ${os.homedir()}`); //C:\Users\username or /home/username
console.log(`hostname is ${os.hostname()}`);
console.log(`map of ip address= ${JSON.stringify(os.networkInterfaces())}`);
console.log(`nb cpus = ${os.cpus().length}`);//ex: 8
*/
console.log(`free memory=${os.freemem()} , total=${os.totalmem()}`);//ex: 8491798528, total=16497295360

var app = express();

app.get('/', function(req, res , next) {
 res.setHeader('Content-Type', 'text/html');
 res.write("<html> <body>");
res.write('<p>Hello world </p>');
res.write('<a href="produit">exemple json </p>');
res.write("</body></html>");
res.end();
});

app.get('/produit', function(req, res , next) {
    let tabProduits = [
       { id : "1" , label : "classeur" , prix : 3.2 } ,
       { id : "2" , label : "stylo" , prix : 1.2 },
       { id : "3" , label : "cahier" , prix : calculModule.multiplierPar2(1.1) }
    ];
    res.send(tabProduits);
   });

app.listen(8282 , function () {
    console.log("http://localhost:8282/");
});