import {Persoon} from "./persoon";

export class User extends Persoon {
    private e_mail: string;
    private wachtwoord: string;
    private rol: string;
    static usernummer: number = 1;

    constructor(naam: string, leeftijd: number, geslacht: string,
                e_mail: string, wachtwoord: string, rol: string) {
        super(naam, leeftijd, geslacht);
        this.e_mail = e_mail;
        this.wachtwoord = wachtwoord;
        this.rol = rol;
        console.log(`nieuw User nummer: ${User.usernummer++} extends persoon`);
    }

    public setemail (e_mail: string):void {
        this.e_mail = e_mail;
    }

    public setWachtwoord (wachtwoord: string):void {
        this.wachtwoord = wachtwoord;
    }

    public setRol (rol: string):void {
        this.rol = rol;
    }

    public getEmail (): string {
        return this.e_mail;
    }

    public getWachtwoord (): string {
        return this.wachtwoord;
    }

    public getRol (): string {
        return this.rol;
    }

    public toString(): string {
        return ( super.toString() + "\r\n" +
                "e-mail: " + this.e_mail + "\r\n" +
                "Wachtwoord: " + this.wachtwoord + "\r\n" +
                "Rol: " + this.rol
        );
    }

    public getNaam(): string{
        if (super.getGeslacht().toLowerCase() == "m") {
            return ("Geachte heer " + super.getNaam())
        } else {
            return ("Geachte mevrouw " + super.getNaam())
        }
    }
}