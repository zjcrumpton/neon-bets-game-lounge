type Suit = 'club' | 'spade' | 'heart' | 'diamond';
type Value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13

// Placed in order, so when hands are determined it will be easy to compare them with each other
enum Hands {
    HIGH_CARD,
    PAIR,
    TWO_PAIR,
    THREE_OF_A_KIND,    
    STRAIGHT,
    FLUSH,
    FULL_HOUSE,
    FOUR_OF_A_KIND,
    STRAIGHT_FLUSH,
    ROYAL_FLUSH,
    ROYAL_STRAIGHT_FLUSH,
}

interface Hand {
  currentHand: Hands,
  highCard: Card,
}

interface Card {
    suit: Suit,
    value: Value,
}

interface Player {
  id: string,
  cards: Card[],
}

type Decision = "Split Pot" | "Winner";

interface Winner {
  decision: Decision,
  players: Player[],
}

export const compareHands = (hands: Hand[]): Winner => {
    let potentialWinners: Player[] = [];
    let winningHand: Hand;


    // If we have players with the same hand that are winners, 
    // - compare their hands to one another
    // - if they have identical hands "basically", then both win and split pot, else
    if (potentialWinners.length > 1) {
      const res = compareSameHands(potentialWinners);
      return {
        decision: res.length > 1 ? "Split Pot" : "Winner",
        players: res,
      }
    }

    return {
      decision: "Winner",
      players: potentialWinners,
    }
}


export const compareSameHands = (players: Player[]): Player[] => {
  let winners: Player[] = [];

  return winners;
}


// Determines the optimal hand for you given both the board and the hand
// @cards - array of your hand and the current board length of 7, hands are not determined so to speak until the end

export const determineHand = (cards: Card[]): Hand => {
    let currentBestHand: Hand = { 
      currentHand: Hands.HIGH_CARD,
      highCard: {
        value: 2,
        suit: "club",
      }
    }
    // determine the Hand value of the card Array

    // - first thing, sort the array based on value
    // -- need to account for ace's being at the end as well
  return currentBestHand;
}

interface Reward {
  player: Player,
  amt: number,
}

const finalEvaluation = (pot: number, players: Player[], board: Card[]): Reward[] | null => {
  const playerHands: Hand[] = [];

  players.forEach(player => {
    playerHands.push(determineHand([...player.cards, ...board]));
  });
  
  const rewards: Reward[] = [];

  const winner: Winner = compareHands(playerHands);

  switch(winner.decision) {
    case "Split Pot": // multiple winners
      const amt = Math.ceil(pot / winner.players.length);
      winner.players.forEach(player => {
        rewards.push({
          player,
          amt,
        })
      })
      return rewards;
    case "Winner": // singular winner
      return [
        {
          player: winner.players[0],
          amt: pot,
        }
      ]
    default: 
      return null;
  }
}