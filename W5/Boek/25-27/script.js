item = {
    "id": id,
    "product": product,
    "model": model,
    "prijs": prijs,
    "aantal": aantal
}



function webBasket(){

    this.getNamen = function (form){
        i = form.element.length;
        namen = [];
        for (x = 0; x < i; x++){
            namen.push(form.element[x].name);
        }
        return namen;
    };

    this.getValues = function (form){
        i = form.element.length;
        values = [];
        for (x = 0; x < i; x++){
            values.push(form.element[x].value);
        }
        return values;
    };

    this.addItem = function (form){
        namen = this.getNamen(form);
        values = this.getValues(form);
        item = "{";
        for (x = 0; x < values.length; x++){
            if (x == values.length - 1){
                item += '"' + namen[x] + '":' + '"' + values[x] + '"' + "}";
            } else {
                item += '"' + namen[x] + '":' + '"' + values[x] + '"' + ",";
            }
        }
        localStorage.setItem(values[0], item);
    };

    this.deleteItem = function (key){
    localStorage.removeItem(key);
    this.viewBasket();
    };

    this.emptyBasket = function (){
        localStorage.clear();
    };

    this.viewBasket = function (){


    };
}

