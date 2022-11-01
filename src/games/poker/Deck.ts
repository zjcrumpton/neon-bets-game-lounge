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

    // Fisher-Yates Shuffle implemenetation from this article https://wsvincent.com/javascript-object-oriented-deck-cards/
    public shuffle() {
        const shuffledDeck = [...this.cards];
        let m = shuffledDeck.length, i;

        while (m) {
            i = Math.floor(Math.random() * m--);
            [shuffledDeck[m], shuffledDeck[i]] = [shuffledDeck[i], shuffledDeck[m]];
        }

        this.cards = shuffledDeck;
        console.log(this.cards);
    }
}
