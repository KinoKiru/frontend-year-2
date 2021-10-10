"use strict";
exports.__esModule = true;
var persoon_1 = require("./persoon");
var umut = new persoon_1.Persoon('Umut', 18, 'M', true);
var demirel = new persoon_1.Persoon('Demirel', 19, 'M', false);
var persoonsGegevens = [];
persoonsGegevens.push(JSON.stringify(demirel.gegevensOpslaan()));
persoonsGegevens.push(JSON.stringify(umut.gegevensOpslaan()));
persoonsGegevens.forEach(function (gegevens) {
    console.log(gegevens + "\r\n");
});
