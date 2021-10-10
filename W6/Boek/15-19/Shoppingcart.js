"use strict";
exports.__esModule = true;
exports.Shoppingcart = void 0;
var Shoppingcart = /** @class */ (function () {
    function Shoppingcart() {
        //Maak een arraylist met type Item
        this.itemList = new Array();
    }
    Shoppingcart.prototype.printCart = function () { };
    ;
    Shoppingcart.prototype.getTotaal = function () { };
    ;
    Shoppingcart.prototype.addToCart = function (item) {
        this.itemList.push(item);
    };
    return Shoppingcart;
}());
exports.Shoppingcart = Shoppingcart;
