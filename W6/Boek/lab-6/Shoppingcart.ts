import {Item} from "./Item";
import {IShoppingcart} from "./IShoppingcart";

export abstract class Shoppingcart implements IShoppingcart{
    abstract printCart(): void ;
    abstract getTotaal(): void ;

    //Maak een arraylist met type Item
    public itemList: Array<Item> = new Array<Item>();

    public addToCart(item: Item): void {
        this.itemList.push(item);
    }
}