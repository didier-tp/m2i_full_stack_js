import express from 'express';
const apiRouter = express.Router();

var allDevises = [];

allDevises.push({ code: 'EUR', nom: 'Euror', change: 1.0 });
allDevises.push({ code: 'USD', nom: 'Dollar', change: 1.1 });
allDevises.push({ code: 'JPY', nom: 'Yen', change: 128 });
allDevises.push({ code: 'GBP', nom: 'Dollar', change: 0.9 });

function findDeviseInArrayByCode(devises, code) {
    var devise = null;
    for (let i in devises) {
        if (devises[i].code == code) {
            devise = devises[i]; break;
        }
    }
    return devise;
}


//exemple URL: http://localhost:8282/devise-api/public/devise  retournant toutes les devise
apiRouter.route('/devise-api/public/devise')
    .get(function (req, res, next) {
            res.send(allDevises);
    });


//exemple URL: http://localhost:8282/devise-api/public/conversion?source=EUR&cible=USD&montant=50 
//à déclencher en mode GET
// retourner { "source" : "EUR" , "cible" : "USD" , "montant" : 50 , "result" : 55} 
apiRouter.route('/devise-api/public/conversion')
    .get(function (req, res, next) {
        let source = req.query.source;
        let cible = req.query.cible;
        let montant = req.query.montant;
        let deviseSource = findDeviseInArrayByCode(allDevises,source);
        let deviseCible = findDeviseInArrayByCode(allDevises,cible);
        let montantConverti = montant * deviseCible.change / deviseSource.change;
        let objRes = { source : source ,
                       cible : cible ,
                       montant : montant ,
                       result : montantConverti};
        res.send(objRes);
    });


export default { apiRouter }; // nouvelle syntaxe es2015