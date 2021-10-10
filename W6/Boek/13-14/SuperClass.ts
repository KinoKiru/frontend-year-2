class SuperClass {
    protected vooornaam: string;
    protected achternaam: string = "Delmar";
    private creditcard: string = "Visa";

    constructor(voornaam: string) {
        this.vooornaam = voornaam
    }

    public getAchternaam(): string {
        return this.achternaam;
    }
}

class SubClass extends SuperClass {

    //constructor van deze subclass gaat naar
    //de super class constructor en geeft dus ook de argumenten mee die de Super nodig heeft
    constructor(voornaam: string) {
        super(voornaam);
        this.vooornaam = voornaam;
    }
}

let shireen: SubClass = new SubClass("Shireen");

console.log("Shireens geerfde achternaam: " + shireen.getAchternaam());