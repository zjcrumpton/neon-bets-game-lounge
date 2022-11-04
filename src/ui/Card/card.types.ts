
export enum CardSuit {
  HEARTS = 'hearts',
  SPADES = 'spades',
  CLUBS = 'clubs',
  DIAMONDS = 'diamonds',
}

export enum CardValue {
  TWO = 2,
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
  ACE,
}

type CardValueIndexedStringMap = {[key in CardValue]: string};

export const CardValueStringMap: CardValueIndexedStringMap = {
  [CardValue.ACE]: 'ace',
  [CardValue.TWO]: 'two',
  [CardValue.THREE]: 'three',
  [CardValue.FOUR]: 'four',
  [CardValue.FIVE]: 'five',
  [CardValue.SIX]: 'six',
  [CardValue.SEVEN]: 'seven',
  [CardValue.EIGHT]: 'eight',
  [CardValue.NINE]: 'nine',
  [CardValue.TEN]: 'ten',
  [CardValue.JACK]: 'jack',
  [CardValue.QUEEN]: 'queen',
  [CardValue.KING]: 'king',
};
