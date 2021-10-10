class Item {
    private id: string;
    private merk: string;
    private model: string;
    private prijs: number;
    private aantal: number;

    constructor(id: string, merk: string, model: string, prijs: number, aantal: number) {
        this.id = id;
        this.merk = merk;
        this.model = model;
        this.prijs = prijs;
        this.aantal = aantal;
    }

    public getId(): string {
        return this.id;
    }

    public getOmschrijving(): string {
        return (this.merk + " " + this.model);
    }

    public getPrijs(): number {
        return this.prijs;
    }

    public getAantal(): number {
        return this.aantal;
    }

    public setAantal(aantal: number): void {
        this.aantal = aantal;
    }

    public setPrijs(prijs: number): void {
        if (prijs > 10 || prijs < 1) {
            throw new Error("oh no prijs not in 0-10");
        } else {
            this.prijs = prijs
        }
    }
}

try {
    let hatsaa: Item = new Item("ao1", "casio", "blitz", 0, 2);
    hatsaa.setPrijs(111);
} catch (e) {
    console.log(e.message)
}
