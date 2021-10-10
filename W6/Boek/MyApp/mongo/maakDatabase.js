var url = "mongodb://localhost:27017/studenten";
var MongoClient = require("mongodb").MongoClient;
MongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    console.log("Database " + db.databaseName + " Gecreerd");
    db.close();
});
