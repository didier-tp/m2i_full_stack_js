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
    db.once('open', function () {
        // we're connected!
        console.log("Connected correctly to mongodb database");
        produitSchema = new mongoose.Schema({
            _id: { type: String, alias: "code" },
            nom: String,
            prix: Number
        });
        produitSchema.set('id', false); //no default virtual id alias for _id
        produitSchema.set('toJSON', {
            virtuals: true,
            versionKey: false,
            transform: function (doc, ret) { delete ret._id }
        });
        //"Produit" model name is "produits" collection name in mongoDB mabase database
        PersistentProduitModel = mongoose.model('Produit', produitSchema);

        //console.log("mongoose PersistentProduitModel : " + PersistentProduitModel );
        if (callbackWithPersistentProduitModel)
              callbackWithPersistentProduitModel(PersistentProduitModel);
    });
}

export default { initMongooseWithSchemaAndModel }