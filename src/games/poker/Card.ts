import { Suit } from "./types/Suit.enum";
import { Value } from "./types/Value.enum";

export class Card {

    private _suit: Suit;
    private _value: Value;

    constructor(suit: Suit, value: Value) {
        this._suit = suit;
        this._value = value;
    }

    get suit() {
        return this._suit;
    }

    get value() {
        return this._value;
    }

}
