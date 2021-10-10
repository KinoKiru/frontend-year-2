var Item = /** @class */ (function () {
    function Item(id, merk, model, prijs, aantal) {
        this.id = id;
        this.merk = merk;
        this.model = model;
        this.prijs = prijs;
        this.aantal = aantal;
    }
    Item.prototype.getId = function () {
        return this.id;
    };
    Item.prototype.getOmschrijving = function () {
        return (this.merk + " " + this.model);
    };
    Item.prototype.getPrijs = function () {
        return this.prijs;
    };
    Item.prototype.getAantal = function () {
        return this.aantal;
    };
    Item.prototype.setAantal = function (aantal) {
        this.aantal = aantal;
    };
    Item.prototype.setPrijs = function (prijs) {
        if (prijs > 10 || prijs < 1) {
            throw new Error("oh no prijs not in 0-10");
        }
        else {
            this.prijs = prijs;
        }
    };
    return Item;
}());
try {
    var hatsaa = new Item("ao1", "casio", "blitz", 0, 2);
    hatsaa.setPrijs(111);
}
catch (e) {
    console.log(e.message);
}
