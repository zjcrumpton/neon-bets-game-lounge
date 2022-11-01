import { Deck } from "./Deck";

export class Game {
    constructor() {
        const deck = new Deck();
        deck.shuffle();
        console.log(deck.cards);
        deck.reset();
        console.log(deck.cards);
        deck.reset();
        console.log(deck.cards);
    }
}
