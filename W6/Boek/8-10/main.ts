import {Persoon} from "./persoon";

let umut: Persoon = new Persoon('Umut', 18, 'M');
let demirel: Persoon = new Persoon('Demirel', 19, 'M');

demirel.setLeeftijd(24);
console.log('de leeftijd van Demirel is: ' + demirel.getLeeftijd());


