import {Item} from "./Item";

export interface IShoppingcart {
    addToCart(item: Item): void;
}