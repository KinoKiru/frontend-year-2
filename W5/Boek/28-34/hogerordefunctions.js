studenten = [
    {
        "naam": "Jurson",
        "leeftijd": 17,
        "geslacht": "M",
        "adres": {
            "straat": "Kruislaan 33",
            "postcode": "1099TT",
            "woonplaats": "Utrecht"
        }
    },
    {
        "naam": "Shireen",
        "leeftijd": 18,
        "geslacht": "V",
        "adres": {
            "straat": "Eindstraat 55",
            "postcode": "2867NN",
            "woonplaats": "Amsterdam"
        }
    },
    {
        "naam": "Sahra",
        "leeftijd": 19,
        "geslacht": "V",
        "adres": {
            "straat": "Hogestraat 23",
            "postcode": "1190UU",
            "woonplaats": "Rotterdam"
        }
    },
];

/* OPDRACHT 30
studenten.forEach(
    function (student){
        console.log(student);
    }
)*/

//opgave 31
/*leerplicht = studenten.filter(function (student) {
    if (student.leeftijd <= 17){
        return true;
    }
});
console.log(leerplicht);*/


/* Opgave 32
namenVanStudenten = studenten.map(function (student) {
    return student.naam
})
console.log(namenVanStudenten);*/


/* opgave 33
gesorteerdeStudenten = studenten.sort(function (a,b) {
    if (a.naam > b.naam){
        return 1;
    }else {
        return -1;
    }
});
console.log(gesorteerdeStudenten);*/


gemiddeldeLeeftijd = studenten.reduce(function (totaal, student) {
    return totaal + student.leeftijd / studenten.length;
}, 0)
console.log(gemiddeldeLeeftijd);
