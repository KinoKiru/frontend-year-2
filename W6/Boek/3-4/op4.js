var student1 = { naam: "Jurson", leeftijd: 17, leerplichtig: true };
console.log("Hallo mijn naam is " + student1.naam + ".");
/*let student: [string, number, boolean];
student = [naam, leeftijd, leerplichtig];*/
var Cijfers;
(function (Cijfers) {
    Cijfers["vak1"] = "Nederlands";
    Cijfers["vak2"] = "Engels";
    Cijfers["vak3"] = "Spaans";
    Cijfers[Cijfers["Nederlands"] = 7] = "Nederlands";
    Cijfers[Cijfers["Engels"] = 8] = "Engels";
    Cijfers[Cijfers["Spaans"] = 8] = "Spaans";
})(Cijfers || (Cijfers = {}));
console.log(Cijfers.vak3 + ' ' + Cijfers.Spaans + "\r\n" + Cijfers.vak1 + ' ' + Cijfers.Nederlands + "\r\n" + Cijfers.vak2 + ' ' + Cijfers.Engels);
