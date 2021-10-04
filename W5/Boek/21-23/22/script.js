let topFunction = function () {
    tekst = "Deel een";
    console.log(tekst);

    return function (inputTekst){
        console.log(tekst + " plus " + inputTekst);
    };
}();
topFunction("Deel twee");