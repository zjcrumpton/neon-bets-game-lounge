import { Suit } from "./types/Suit.enum";
import { Value, ValueStringMap } from "./types/Value.enum";

export class Card {

    private _suit: Suit;
    private _value: Value;

    constructor(suit: Suit, value: Value) {
        this._suit = suit;
        this._value = value;
    }

    get displayName() {
        return `${ValueStringMap[this._value]} of ${this._suit}`;
    }

    get suit() {
        return this._suit;
    }

    get value() {
        return this._value;
    }
}
