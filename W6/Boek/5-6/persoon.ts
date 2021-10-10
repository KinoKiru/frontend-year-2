export class Persoon {
    public naam: string;
    private leeftijd: number;
    protected geslacht:string;
    public isStudent: boolean;
    public gemiddeldCijfer: number;

    constructor(naam: string, leeftijd: number, geslacht: string, isIstudent?:boolean) {
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.geslacht = geslacht;
        this.isStudent = isIstudent;
        console.log('Nieuw Persoon object aangemaakt');
        console.log('De property naam is ' + this.naam);
    }

    public print (){
        console.log(
         "Users naam: " + this.naam + "\r\n" +
         "Users leeftijd: " + this.leeftijd + "\r\n" +
         "Users geslacht: " + this.geslacht
        )
    }
}

//calls the class and uses the constructor
// new Persoon('hans', 99, 'man');
