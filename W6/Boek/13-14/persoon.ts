export class Persoon {
    //FIELDS
    public naam: string;
    private leeftijd: number;
    protected geslacht:string;
    public isStudent: boolean;
    public gemiddeldCijfer: number;

    //CONSTRUCTOR
    constructor(naam: string, leeftijd: number, geslacht: string, isIstudent?:boolean) {
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.geslacht = geslacht;
        this.isStudent = isIstudent;
    }


    //Properties(GET, SET)
    public getGeslacht(): string {
        return this.geslacht;
    }

    public setGeslacht (geslacht: string): void{
        this.geslacht = geslacht;
    }

    public getLeeftijd(): number {
        return this.leeftijd;
    }

    public setLeeftijd(leeftijd: number): void {
        this.leeftijd = leeftijd;
    }

    public getNaam(): string {
        return this.naam;
    }

    public setNaam(naam: string): void{
        this.naam = naam;
    }

    public getIsStudent(): boolean {
        return this.isStudent;
    }

    public setIsStudent(isStudent: boolean): void{
        this.isStudent = isStudent;
    }

    public getGemiddeldCijfer(): number {
        return this.gemiddeldCijfer;
    }

    public setGemiddledCijfer(cijfer: number): void{
        this.gemiddeldCijfer = cijfer;
    }


    // METHODES
    public toString (): string{
        return (
         "Users naam: " + this.naam + "\r\n" +
         "Users leeftijd: " + this.leeftijd + "\r\n" +
         "Users geslacht: " + this.geslacht
        )
    }

    public gegevensOpslaan(): object{
        return {"naam": this.naam, "Leeftijd": this.leeftijd, "Geslacht": this.geslacht, "isStudent": this.isStudent, "Gemiddeldcijfer": this.gemiddeldCijfer} ;
    }

}

//calls the class and uses the constructor
// new Persoon('hans', 99, 'man');
