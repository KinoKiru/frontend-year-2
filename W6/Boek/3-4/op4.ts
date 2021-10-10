interface student {
    naam: string,
    leeftijd: number,
    leerplichtig: boolean
}

let student1: student = {naam: "Jurson", leeftijd: 17, leerplichtig: true}
console.log(`Hallo mijn naam is ${student1.naam}.`);

let tuple: [string, number, boolean];
tuple = [student1.naam, student1.leeftijd, student1.leerplichtig];

enum Cijfers {vak1 = 'Nederlands',vak2 = 'Engels', vak3 = 'Spaans', Nederlands = 7, Engels = 8, Spaans = 8}

console.log(
    Cijfers.vak3 + ' ' + Cijfers.Spaans + "\r\n" + Cijfers.vak1 + ' ' + Cijfers.Nederlands + "\r\n" +Cijfers.vak2 + ' ' + Cijfers.Engels
);
