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
var SuperClass = /** @class */ (function () {
    function SuperClass(voornaam) {
        this.achternaam = "Delmar";
        this.creditcard = "Visa";
        this.vooornaam = voornaam;
    }
    SuperClass.prototype.getAchternaam = function () {
        return this.achternaam;
    };
    return SuperClass;
}());
var SubClass = /** @class */ (function (_super) {
    __extends(SubClass, _super);
    //constructor van deze subclass gaat naar
    //de super class constructor en geeft dus ook de argumenten mee die de Super nodig heeft
    function SubClass(voornaam) {
        var _this = _super.call(this, voornaam) || this;
        _this.vooornaam = voornaam;
        return _this;
    }
    return SubClass;
}(SuperClass));
var shireen = new SubClass("Shireen");
console.log("Shireens geerfde achternaam: " + shireen.getAchternaam());
