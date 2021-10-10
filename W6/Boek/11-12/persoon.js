"use strict";
exports.__esModule = true;
exports.Persoon = void 0;
var Persoon = /** @class */ (function () {
    //CONSTRUCTOR
    function Persoon(naam, leeftijd, geslacht, isIstudent) {
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.geslacht = geslacht;
        this.isStudent = isIstudent;
    }
    //Properties(GET, SET)
    Persoon.prototype.getGeslacht = function () {
        return this.geslacht;
    };
    Persoon.prototype.setGeslacht = function (geslacht) {
        this.geslacht = geslacht;
    };
    Persoon.prototype.getLeeftijd = function () {
        return this.leeftijd;
    };
    Persoon.prototype.setLeeftijd = function (leeftijd) {
        this.leeftijd = leeftijd;
    };
    Persoon.prototype.getNaam = function () {
        return this.naam;
    };
    Persoon.prototype.setNaam = function (naam) {
        this.naam = naam;
    };
    Persoon.prototype.getIsStudent = function () {
        return this.isStudent;
    };
    Persoon.prototype.setIsStudent = function (isStudent) {
        this.isStudent = isStudent;
    };
    Persoon.prototype.getGemiddeldCijfer = function () {
        return this.gemiddeldCijfer;
    };
    Persoon.prototype.setGemiddledCijfer = function (cijfer) {
        this.gemiddeldCijfer = cijfer;
    };
    // METHODES
    Persoon.prototype.getGevens = function () {
        return ("Users naam: " + this.naam + "\r\n" +
            "Users leeftijd: " + this.leeftijd + "\r\n" +
            "Users geslacht: " + this.geslacht);
    };
    return Persoon;
}());
exports.Persoon = Persoon;
//calls the class and uses the constructor
// new Persoon('hans', 99, 'man');
