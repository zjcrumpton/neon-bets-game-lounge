import { Card } from "./Card";
import { Suit } from "./types/Suit.enum";

export class Deck {
    cards: Card[];

    constructor() {
        this.cards = [];

        const suits = Object.values(Suit);
        suits.forEach((suit) => {
            for (let i = 1; i <= 13; i++) {
                this.cards.push(new Card(suit, i));
            }
        });
    }
}
