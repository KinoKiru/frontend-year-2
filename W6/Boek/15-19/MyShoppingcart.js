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
exports.MyShoppingcart = void 0;
var Shoppingcart_1 = require("./Shoppingcart");
var MyShoppingcart = /** @class */ (function (_super) {
    __extends(MyShoppingcart, _super);
    function MyShoppingcart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyShoppingcart.prototype.printCart = function () {
        _super.prototype.printCart.call(this);
        console.log("Product omschrijving \t Prijs \t Aantal\n");
        this.itemList.forEach(function (item) {
            console.log(item.getId() + "\t" + item.getOmschrijving() + "\t" +
                item.getPrijs() + "\t" + item.getAantal() + "\n");
        });
    };
    MyShoppingcart.prototype.getTotaal = function () {
        _super.prototype.getTotaal.call(this);
        var totaal = 0;
        this.itemList.forEach(function (item) {
            totaal += (item.getPrijs() * item.getAantal());
        });
        console.log("totaal bedrag: " + totaal.toFixed(2));
    };
    return MyShoppingcart;
}(Shoppingcart_1.Shoppingcart));
exports.MyShoppingcart = MyShoppingcart;
