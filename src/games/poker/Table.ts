import { Player } from "./Player";

export class Table {
    private _seats: Player[] = [];
    private _dealerIndex = 0;
    
    public joinTable(newPlayer: Player) {
        this._seats.push(newPlayer);
    }

    get seats() {
        return this._seats;
    }

    get dealer() {
        return this._seats[this._dealerIndex];
    }

};
 