"use strict";
exports.__esModule = true;
exports.Persoon = void 0;
var Persoon = /** @class */ (function () {
    function Persoon(naam, leeftijd, geslacht, isIstudent) {
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.geslacht = geslacht;
        this.isStudent = isIstudent;
        console.log('Nieuw Persoon object aangemaakt');
        console.log('De property naam is ' + this.naam);
    }
    Persoon.prototype.print = function () {
        console.log("Users naam: " + this.naam + "\r\n" +
            "Users leeftijd: " + this.leeftijd + "\r\n" +
            "Users geslacht: " + this.geslacht);
    };
    return Persoon;
}());
exports.Persoon = Persoon;
//calls the class and uses the constructor
// new Persoon('hans', 99, 'man');
