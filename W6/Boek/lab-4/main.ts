import {Persoon} from "./persoon";

let umut: Persoon = new Persoon('Umut', 18, 'M', true);
let demirel: Persoon = new Persoon('Demirel', 19, 'M', false);

let persoonsGegevens: string[] = [];
persoonsGegevens.push(JSON.stringify(demirel.gegevensOpslaan()));
persoonsGegevens.push(JSON.stringify(umut.gegevensOpslaan()));

persoonsGegevens.forEach((gegevens: string) => {
    console.log(gegevens + "\r\n");
});