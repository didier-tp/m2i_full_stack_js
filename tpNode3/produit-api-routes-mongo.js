//var express = require('express');
import express from 'express';
import produitDao from './produit_dao_mongoose.js';
import mongoose from 'mongoose'; // npm install -s mongoose

var PersistentProduitModel;
produitDao.initMongooseWithSchemaAndModel( (model ) => { PersistentProduitModel = model })

const apiRouter = express.Router();


//exemple URL: http://localhost:8282/produit-api/public/produit-reinit
apiRouter.route('/produit-api/public/produit-reinit')
    .get(async function (req, res, next) {
        try{
            let messageObj = await produitDao.reInitDataSet(PersistentProduitModel);
            res.send(messageObj);
        }catch(err){
            res.status(500).json(err);
        }
    });


//exemple URL: http://localhost:8282/produit-api/public/produit/618d53514e0720e69e2e54c7
apiRouter.route('/produit-api/public/produit/:code')
    .get(async function (req, res, next) {
        try{
        let codeProduit = req.params.code;
        let produit = await PersistentProduitModel.findById(codeProduit );
        res.send(produit);
        }catch(err){
            res.status(404).json({message:"not found"});
        }
    });

//exemple URL: http://localhost:8282/produit-api/public/produit (returning all produits)
// http://localhost:8282/produit-api/public/produit?prixMini=1.05
apiRouter.route('/produit-api/public/produit')
    .get( async function (req, res, next) {
        try{
            let prixMini = Number(req.query.prixMini);
            let criteria=prixMini?{ prix: { $gte: prixMini } }:{};  //$gte signifie greater or equal
            let produits = await PersistentProduitModel.find(criteria);
            res.send(produits);
        }catch(err){
            res.status(404);
        }
    });
// http://localhost:8282/produit-api/private/role-admin/produit en mode post
// avec { "code" : null , "nom" : "produitXy" , "prix" : 12.3 }
//ou bien { "nom" : "produitXy" , "prix" : 12.3 }dans req.body
apiRouter.route('/produit-api/private/role-admin/produit')
    .post(async function (req, res, next) {
       
        try{
        var nouveauProduit = req.body;
        nouveauProduit.code = new mongoose.Types.ObjectId();
        console.log("nouveauProduit = " + JSON.stringify(nouveauProduit))
        let persistentProduct = new PersistentProduitModel(nouveauProduit);
        let savedProduct = await persistentProduct.save();
        console.log("savedProduct = " + JSON.stringify(savedProduct))
        //nouveauProduit.code = savedProduct.code;
        res.send(nouveauProduit);
    }catch(err){
        res.status(500).json(err);
    }
    });
// http://localhost:8282/produit-api/private/role-admin/produit en mode PUT
// avec { "code" : 1 , "nom" : "produit_xy" , "prix" : 16.3 } dans req.body
apiRouter.route('/produit-api/private/role-admin/produit')
    .put(async function (req, res, next) {
        try{
                var newValueOfProduitToUpdate = req.body;
                console.log("PUT,newValueOfProduitToUpdate="
                    + JSON.stringify(newValueOfProduitToUpdate));
                let  produitToUpdate = await PersistentProduitModel.findById(newValueOfProduitToUpdate.code );
                if (produitToUpdate != null) {
                    let filter = { _id : newValueOfProduitToUpdate.code };
                    await PersistentProduitModel.updateOne(filter ,newValueOfProduitToUpdate );
                    res.send(newValueOfProduitToUpdate);
                } 
      } catch(err){
        res.status(404).json({ error: "erreur put/update" });
    }
});

// http://localhost:8282/produit-api/private/role-admin/produit/618d53514e0720e69e2e54c7 en mode DELETE
apiRouter.route('/produit-api/private/role-admin/produit/:code')
    .delete(async function (req, res, next) {
        try{
            let codeProduit = req.params.code;
            console.log("DELETE,codeProduit=" + codeProduit);
            const filter = { _id : codeProduit };
            await PersistentProduitModel.deleteOne(filter);
            res.send({ deletedOrAlreadyDeletedProduitCode: codeProduit });
            //res.status(204).end(); //204 signitfie NoContent (variante du 200/OK avec aucun message d'explication)
        }   catch(err){
           res.status(500).json(err);
        }
    });
// exports.apiRouter = apiRouter; // ancienne syntaxe common-js
export default { apiRouter }; // nouvelle syntaxe es2015