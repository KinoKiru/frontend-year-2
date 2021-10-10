import {Shoppingcart} from "./Shoppingcart";
import {Item} from "./Item";

export class MyShoppingcart extends Shoppingcart {
    public printCart(): void {
        console.log("Product omschrijving \t Prijs \t Aantal\n");
        this.itemList.forEach((item) => {
            console.log(item.getId() + "\t" + item.getOmschrijving() + "\t" +
            item.getPrijs() + "\t" + item.getAantal() + "\n")
        })
    }

    public getTotaal(): void{
        let totaal: number = 0;
        this.itemList.forEach((item: Item) => {
         totaal += (item.getPrijs() * item.getAantal());
        })
        console.log("totaal bedrag: " + totaal.toFixed(2));
    }
}