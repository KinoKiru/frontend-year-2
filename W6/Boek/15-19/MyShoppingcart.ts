import {Shoppingcart} from "./Shoppingcart";
import {Item} from "./Item";

export class MyShoppingcart extends Shoppingcart {
    public printCart(): void {
        super.printCart();
        console.log("Product omschrijving \t Prijs \t Aantal\n");
        this.itemList.forEach((item) => {
            console.log(item.getId() + "\t" + item.getOmschrijving() + "\t" +
            item.getPrijs() + "\t" + item.getAantal() + "\n")
        })
    }
}