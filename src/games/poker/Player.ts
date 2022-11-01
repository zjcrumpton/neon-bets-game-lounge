export class Player {
    private _name: string;
    private _chips: number;
    private static PLAYER_COUNT = 1;

    constructor(name: string = `Player-${Player.PLAYER_COUNT}`, startingChips: number = 1000) {
        this._name = name;
        this._chips = startingChips;
        Player.PLAYER_COUNT++;
    }

    get name() {
        return this._name;
    }
}
