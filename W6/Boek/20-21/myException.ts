class myException {
    private fs = require('fs');

    constructor() {
    }

    creëerFile() {
        this.fs.writeFile('file.txt',
            '{"naam": "Juist", "e_mail", "juist@gmail.com"}',
            (err) => {
                if (err) {
                    return console.error(err);
                }
                console.log("Bestand was aangemaakt!");
            }
        );
    }

    leesFile() {
        this.fs.readFile('file.txt', (err, data) => {
            if (err) {
                return console.error(err);
            }
            console.log(data.toString());
        })
    }

    public delen(a: number, b: number): number {
        if (b == 0) {
            throw new Error("\nDeler kan niet 0 zijn");
        } else {
            return a / b;
        }
    }
}

let myExceptions: myException = new myException();
myExceptions.creëerFile();
myExceptions.leesFile();

let resultaat: number = 0;
try {
    resultaat = myExceptions.delen(1, 0);
} catch (e) {
    console.log(e.message);
}