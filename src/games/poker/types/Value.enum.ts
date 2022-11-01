export enum Value {
    ACE = 1,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    JACK,
    QUEEN,
    KING,
}

type ValueIndexedStringMap = {[key in Value]: string};

export const ValueStringMap: ValueIndexedStringMap = {
    [Value.ACE]: 'Ace',
    [Value.TWO]: 'Two',
    [Value.THREE]: 'Three',
    [Value.FOUR]: 'Four',
    [Value.FIVE]: 'Five',
    [Value.SIX]: 'Six',
    [Value.SEVEN]: 'Seven',
    [Value.EIGHT]: 'Eight',
    [Value.NINE]: 'Nine',
    [Value.TEN]: 'Ten',
    [Value.JACK]: 'Jack',
    [Value.QUEEN]: 'Queen',
    [Value.KING]: 'King',
};
