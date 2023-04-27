import mongoose from 'mongoose'; // npm install -s mongoose

var mongoDbUrl = process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017'; //default

var produitSchema; //mongoose Shcema (structure of mongo document)

var PersistentProduitModel; //mongoose Model (constructor of persistent PersistentDeviseModel)
var initMongooseWithSchemaAndModel = function (callbackWithPersistentProduitModel) {

    mongoose.connect(mongoDbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'mabase'
    });
    const db = mongoose.connection;
    db.on('error', function () {
        console.log("mongoDb connection error for dbUrl=" + mongoDbUrl);
    });

    /*
     By default, Mongoose adds an _id property to your schemas.
     ----------------
     You can also overwrite Mongoose's default _id with your own _id. Just be careful: Mongoose will refuse to save a document that doesn't have an _id, 
     so you're responsible for setting _id if you define your own _id
     ------------- 
    */


    db.once('open', function () {
        // we're connected!
        console.log("Connected correctly to mongodb database");
        produitSchema = new mongoose.Schema({
            //_id: { type: mongoose.ObjectId, alias: "code" },
            //NB: * specific _id in schema ==> id value must be set by code before add/insert
            //    * automatic mongoose default _id (of type mongoose.Types.ObjectId) 
            //    will be automatically generated during add/insert
            nom: String,
            prix: Number
        });
        produitSchema.set('id', false); //no default virtual id alias for _id
        produitSchema.virtual('code').get(function() { return this._id; });
        produitSchema.virtual('code').set(function(newIdCodeVal) { this._id=newIdCodeVal; });
        produitSchema.set('toJSON', {
            virtuals: true,
            versionKey: false ,
           transform: function (doc, ret) { ret.code = ret._id; delete ret._id }
        });
        //"Produit" model name is "produits" collection name in mongoDB mabase database
        PersistentProduitModel = mongoose.model('Produit', produitSchema);

        //console.log("mongoose PersistentProduitModel : " + PersistentProduitModel );
        if (callbackWithPersistentProduitModel)
              callbackWithPersistentProduitModel(PersistentProduitModel);
    });
}

var reInitDataSet=async function(PersistentProdModel){
    try{
    await PersistentProdModel.deleteMany( {} ); //delete all old content
    await (new PersistentProdModel({code : "618d53514e0720e69e2e54c7" , nom:"cahier" , prix: 3.3 })).save();
    await (new PersistentProdModel({code : "618d53514e0720e69e2e54c8" , nom:"stylo" , prix: 1.63 })).save();
    await (new PersistentProdModel({code : "618d53514e0720e69e2e54c9" , nom:"classeur" , prix: 5.5 })).save();
    return { message : "produits collection successfully reinit" };
    }catch(ex){
        throw ex;
    }
}

export default { initMongooseWithSchemaAndModel , reInitDataSet }