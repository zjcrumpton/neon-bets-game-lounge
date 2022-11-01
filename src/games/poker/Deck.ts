import { Card } from "./Card";
import { Suit } from "./types/Suit.enum";

export class Deck {
    private _cards: Card[];

    constructor() {
        this._cards = this.createBlankDeck();
        this.shuffle();
    }

    get cards() {
        return this._cards;
    }

    // Fisher-Yates Shuffle implemenetation from this article https://wsvincent.com/javascript-object-oriented-deck-cards/
    public shuffle() {
        const shuffledDeck = [...this._cards];
        let m = shuffledDeck.length;
        let i = 0;

        while (m) {
            i = Math.floor(Math.random() * m--);
            [shuffledDeck[m], shuffledDeck[i]] = [shuffledDeck[i], shuffledDeck[m]];
        }

        this._cards = shuffledDeck;
    }

    public deal() {
        return this._cards.pop();
    }

    public reset() {
        this._cards = this.createBlankDeck();
        this.shuffle();
    }

    private createBlankDeck() {
        const cards: Card[] = [];
        const suits = Object.values(Suit);
        suits.forEach((suit) => {
            for (let i = 1; i <= 13; i++) {
                cards.push(new Card(suit, i));
            }
        });

        return cards;
    }
}
