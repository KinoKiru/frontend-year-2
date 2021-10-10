"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.User = void 0;
var persoon_1 = require("./persoon");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(naam, leeftijd, geslacht, e_mail, wachtwoord, rol) {
        var _this = _super.call(this, naam, leeftijd, geslacht) || this;
        _this.e_mail = e_mail;
        _this.wachtwoord = wachtwoord;
        _this.rol = rol;
        console.log("nieuw User nummer: " + User.usernummer++ + " extends persoon");
        return _this;
    }
    User.prototype.setemail = function (e_mail) {
        this.e_mail = e_mail;
    };
    User.prototype.setWachtwoord = function (wachtwoord) {
        this.wachtwoord = wachtwoord;
    };
    User.prototype.setRol = function (rol) {
        this.rol = rol;
    };
    User.prototype.getEmail = function () {
        return this.e_mail;
    };
    User.prototype.getWachtwoord = function () {
        return this.wachtwoord;
    };
    User.prototype.getRol = function () {
        return this.rol;
    };
    User.prototype.toString = function () {
        return (_super.prototype.toString.call(this) + "\r\n" +
            "e-mail: " + this.e_mail + "\r\n" +
            "Wachtwoord: " + this.wachtwoord + "\r\n" +
            "Rol: " + this.rol);
    };
    User.prototype.getNaam = function () {
        if (_super.prototype.getGeslacht.call(this).toLowerCase() == "m") {
            return ("Geachte heer " + _super.prototype.getNaam.call(this));
        }
        else {
            return ("Geachte mevrouw " + _super.prototype.getNaam.call(this));
        }
    };
    User.usernummer = 1;
    return User;
}(persoon_1.Persoon));
exports.User = User;
