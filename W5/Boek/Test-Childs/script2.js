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

    };
    this.emptyBasket = function () {
        localStorage.clear();

    };


    this.viewBasket = function () {
        let table = document.createElement("table");
        let item = JSON.parse(localStorage.getItem(localStorage.key(0)));

        //makes the top rows aka table headers
        let tr = document.createElement("tr");
        for (let key in item) {
            let th = document.createElement("th");
            th.innerText = key;
            tr.appendChild(th);
        }
        table.appendChild(tr);

        //makes the td rows
        for (x = 0; x < localStorage.length; x++) {
            let tr = document.createElement("tr");

            let ite = JSON.parse(localStorage.getItem(localStorage.key(x)));

            //adds the cells
            for (let key in ite) {
                let td = document.createElement("td");
                td.innerText = ite[key];

                //makes a new image
                img = document.createElement("img");
                img.src = '../images/recycle.png';
                img.width = 25;

                //makes a link tag with a onclick TODO, but only does the first one
                a = document.createElement("a");
                a.setAttribute("onclick", 'basket.deleteItem(' + ite[key] + ')');
                a.appendChild(img);

                tr.appendChild(td);
            }
            tr.appendChild(a);
            //adds the images to the row
            table.appendChild(tr);

        }
        document.getElementById("rows").appendChild(table);
    }


    //for how many items localstorage contains gets the items and adds them to item,
    // also makes a new row for each new item rows (id,name,product,price, ect)
    //makes new cells for each item (key->item) { new row },
    //after making a new row with all the new data from localstorage add a cell with image which removes-
    //the item row from localstorage
    //after all the data is processed add the closing tag for the table and then add the last item which removes all data from localstorage
    /*for (x = 0; x < localStorage.length; x++) {

        for (var key in item) {
            tabel += "<td>" + "<a href='#top' onclick='basket.deleteItem(" + item[key] +
                ");'><img width='25px' src='../images/recycle.png' /></a></td>";
            tabel += "</tr>";
            break;
        }
    }
    tabel += "</table>";
    document.getElementById('rows').innerHTML = tabel +
        "<img  src='../images/close.png' width=\"30px\" onclick='basket.emptyBasket()' />";
};*/
}

var basket = new webBasket();
