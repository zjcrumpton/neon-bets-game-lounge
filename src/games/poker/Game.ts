import { Deck } from "./Deck";
import { Player } from "./Player";
import { Table } from "./Table";

export class Game {
    private _deck: Deck;
    private _table: Table;
    private _bigBlind: number;

    constructor(bigBlind: number = 50) {
        this._deck = new Deck();
        this._deck.shuffle();
        this._table = new Table();
        this._bigBlind = bigBlind;

        this._table.joinTable(new Player());
        this._table.joinTable(new Player());
        this._table.joinTable(new Player());
        this._table.joinTable(new Player());
        this._table.joinTable(new Player());
        this._table.joinTable(new Player());
        this._table.joinTable(new Player());
        this._table.joinTable(new Player());

        this.startGame();
    }

    public startGame() {
        if (this._table.seats.length >= 2) {
            this.gameLoop();
        }
    }

    private gameLoop() {

    }

    get bigBlind() {
        return this._bigBlind;
    }

    get smallBlind() {
        return this._bigBlind / 2;
    }
}
