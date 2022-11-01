import { Deck } from "./Deck";

export class Game {
    constructor() {
        const deck = new Deck();
        deck.shuffle();
    }
}