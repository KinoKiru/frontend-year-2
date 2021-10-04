function grootvader() {
    familieNaam = 'Mandela';
    let naam = 'grootvader';
    let leeftijd = 66;
    console.log(naam + " " + familieNaam + " is " + leeftijd);

    function vader() {
        ogen = 'Brown';
        let naam = 'vader';
        let leeftijd = 36;
        console.log(naam + " " + familieNaam + " is " + leeftijd);

        function kind() {
            let naam = 'kind';
            let leeftijd = 16;
            console.log(naam + " " + familieNaam + " is " + leeftijd
            + " en heeft " + ogen + " ogen");
        }
        kind();
        window.kind = kind;
    }
    vader();
}
grootvader();
kind();