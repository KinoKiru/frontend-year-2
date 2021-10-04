const Rekenmachine = function () {
    this.getal = '';
    this.getalSaved = 0;
    this.operator = '';

    this.oper = function (value) {
        this.operator = value;
        this.getalSaved = +this.getal;
        this.getal = '';
        document.getElementById("output").value = this.operator;
    }
    this.operandx = function (value) {
        this.getal += value;
        document.getElementById("output").value = this.getal;
    }

    this.calculate = function () {
        try {
            switch (this.operator) {
                case "*":
                case "x":
                    document.getElementById("output").value = this.getalSaved * +this.getal;
                    break;

                case "/":
                    document.getElementById("output").value = this.getalSaved / +this.getal;
                    break;

                case "+":
                    document.getElementById("output").value = this.getalSaved + +this.getal;
                    break;

                case "-":
                    document.getElementById("output").value = this.getalSaved - +this.getal;
                    break;
            }
        } finally {
            this.getal = '';
            this.getalSaved = 0;
            this.operator = '';
        }
    }

    this.reset = function () {
        document.getElementById("output").value = '0';
        this.getal = '';
        this.getalSaved = 0;
        this.operator = '';
    }

}
calculator = new Rekenmachine();