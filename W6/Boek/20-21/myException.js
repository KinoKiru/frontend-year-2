var myException = /** @class */ (function () {
    function myException() {
        this.fs = require('fs');
    }
    myException.prototype.creëerFile = function () {
        this.fs.writeFile('file.txt', '{"naam": "Juist", "e_mail", "juist@gmail.com"}', function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("Bestand was aangemaakt!");
        });
    };
    myException.prototype.leesFile = function () {
        this.fs.readFile('file.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log(data.toString());
        });
    };
    myException.prototype.delen = function (a, b) {
        if (b == 0) {
            throw new Error("\nDeler kan niet 0 zijn");
        }
        else {
            return a / b;
        }
    };
    return myException;
}());
var myExceptions = new myException();
myExceptions.creëerFile();
myExceptions.leesFile();
var resultaat = 0;
try {
    resultaat = myExceptions.delen(1, 0);
}
catch (e) {
    console.log(e.message);
}
