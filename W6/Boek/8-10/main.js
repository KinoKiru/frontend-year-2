"use strict";
exports.__esModule = true;
var persoon_1 = require("./persoon");
var umut = new persoon_1.Persoon('Umut', 18, 'M');
var demirel = new persoon_1.Persoon('Demirel', 19, 'M');
demirel.setLeeftijd(24);
//console.log('de leeftijd van Demirel is: ' + demirel.getLeeftijd());
var hans = function (umut) {
    umut.setGeslacht("Vrouw  a beef");
    umut.print();
};
hans.call(umut);
