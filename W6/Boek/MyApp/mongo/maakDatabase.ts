let url = "mongodb://localhost:27017/studenten";

let MongoClient = require("mongodb").MongoClient;

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    console.log("Database " + db.databaseName + " Gecreerd");

    db.close();
});