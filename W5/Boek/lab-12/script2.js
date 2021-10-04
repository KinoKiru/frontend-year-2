function webBasket() {
    this.getItemInfo = function (form) {
        i = form.elements.length;
        itemInfo = [];
        for (x = 0; x < i; x++) {
            itemInfo.push(form.elements[x].name);
        }
        return itemInfo;
    };

    this.getItemValues = function (form) {
        i = form.elements.length;
        itemValues = [];
        for (x = 0; x < i; x++) {
            itemValues.push(form.elements[x].value);
        }
        return itemValues;
    };

    this.addItem = function (form) {
        info = this.getItemInfo(form);
        values = this.getItemValues(form);
        item = "{";
        for (x = 0; x < values.length; x++) {
            if (x == values.length - 1) {
                item += '"' + info[x] + '":' + '"' + values[x] + '"' + "}"
            } else {
                item += '"' + info[x] + '":' + '"' + values[x] + '"' + ",";
            }
        }
        localStorage.setItem(values[0], item);
    };


    this.deleteItem = function (key) {
        localStorage.removeItem(key);
        this.viewBasket();
    };
    this.emptyBasket = function () {
        localStorage.clear();
        this.viewBasket();
    };


    this.viewBasket = function () {
        tabel = "<table>";

        //gets the items from local storage and parses it into usable data,
        //after that adds the key(in this case its the names for the table headers)
        //and adds them to the table
        //Key ==  name of json key, item[key] == value
        item = JSON.parse(localStorage.getItem(localStorage.key(0)));
        for (var key in item) {
            tabel += "<th>" + key + "</th>";
        }

        //for how many items localstorage contains gets the items and adds them to item,
        // also makes a new row for each new item rows (id,name,product,price, ect)
        //makes new cells for each item (key->item) { new row },
        //after making a new row with all the new data from localstorage add a cell with image which removes-
        //the item row from localstorage
        //after all the data is processed add the closing tag for the table and then add the last item which removes all data from localstorage
        for (x = 0; x < localStorage.length; x++) {

            //get the item
            item = JSON.parse(localStorage.getItem(localStorage.key(x)));
            tabel += "<tr>";

            for (var key in item) {
                tabel += "<td>" + item[key] + "</td>";
            }

            for (var key in item) {
                tabel +=
                    "<td>"
                        + "<a href='#top' onclick='basket.deleteItem(" + item[key] + ");'>" +
                             "<img width='25px' src='../images/recycle.png'/>" +
                         "</a>" +
                    "</td>";
                tabel += "</tr>";
                break;
            }
        }
        tabel += "</table>";
        document.getElementById('rows').innerHTML = tabel +
            "<img  src='../images/close.png' width='30px' onclick='basket.emptyBasket()' />";
    };
}

var basket = new webBasket();
