import { useCallback, useMemo, useState } from 'react'
import { Player } from '../../../../../models/player';
import Button from '../../../../../ui/Button/Button';
import Card, { CardProps } from '../../../../../ui/Card/Card';
import { CardSuit, CardValue } from '../../../../../ui/Card/card.types';
import PlayerCard from './components/PlayerInfo';
import './poker.css'

interface PokerProps {
  bigBlind: number,
  smallBlind: number,
  players: Player[],
}


interface MyInfoData {
  name: string,
  money: number,
}

interface PlayerConfig {
  name: string,
  money: number,
  color?: string,
  hand?: PlayerHand,
}

interface PlayerHand {
  leftCard: CardProps,
  rightCard: CardProps,
}

interface SampleData {
  activePlayerIndex: 0;
  players: PlayerConfig[];
  boardCards: (CardProps | null)[];
  opponentCards: (CardProps | null)[]; // Cards = showing, null = not showing, undefined = not playing 
  potValue: number,
  potLeader: string,
}

const sampleData: SampleData = {
  activePlayerIndex: 0,
  players: [
    {
      name: "Jason The Prodigal Son",
      money: 1000,
      hand: {
        leftCard: {
          suit: CardSuit.DIAMONDS,
          value: CardValue.ACE,
        },
        rightCard: {
          suit: CardSuit.CLUBS,
          value: CardValue.ACE,
        }
      },
    },
    {
      name: "GSK",
      money: 3000,
    },
    {
      name: "SpicySanti",
      money: 2000,
    },
    {
      name: "Xvaier",
      money: 2000,
      hand: {
        leftCard: {
          suit: CardSuit.HEARTS,
          value: CardValue.ACE,
        },
        rightCard: {
          suit: CardSuit.SPADES,
          value: CardValue.ACE,
        }
      },
    },
    {
      name: "Cyberlexie",
      money: 2000,
    },
    {
      name: "Cyberlexie",
      money: 2000,
    },
    {
      name: "Cyberlexie",
      money: 2000,
    },
  ],
  boardCards: [
    {suit: CardSuit.CLUBS, value: CardValue.EIGHT},
    {suit: CardSuit.DIAMONDS, value: CardValue.TEN},
    {suit: CardSuit.HEARTS, value: CardValue.FOUR},
    {suit: CardSuit.HEARTS, value: CardValue.FOUR},
    {suit: CardSuit.HEARTS, value: CardValue.FOUR},
  ],
  opponentCards: [
    null,
    null,
    null,
    null,
  ],
  potValue: 10000,
  potLeader: "GSK",
}

const Poker = () => {

  const activePlayerData: PlayerConfig = useMemo(() => sampleData.players[sampleData.activePlayerIndex], [sampleData.players, sampleData.activePlayerIndex]);

  const otherPlayerData: PlayerConfig[] = useMemo(() => {
    const {players, activePlayerIndex} = sampleData; 
    return players.slice(0, activePlayerIndex).concat(players.slice(activePlayerIndex + 1));
  }, [sampleData.players, sampleData.activePlayerIndex]);

  const playerFold = useCallback(() => {
    console.log("Player Folded");
  }, []);

  const playerRaise = useCallback(() => {
    console.log("Player Folded");
  }, []);

  const playerCall = useCallback(() => {
    console.log("Player Folded");
  }, []);

  const playerCheck = useCallback(() => {
    console.log("Player Folded");
  }, []);

  return (
    <div className='nb-poker-game'>
      <div className='nb-poker-table'>
        <div className='nb-poker-table-status'>
          <div className='nb-poker-table-status-left'>
            <span>pot:</span> 
            <span>chip leader:</span>
          </div>
          <div className='nb-poker-table-status-right'> 
            <span>${sampleData.potValue}</span>
            <span>{sampleData.potLeader}</span>
          </div>
        </div>
        <div className='nb-poker-table-cards'>
          {
            sampleData.boardCards.map((cardProps: CardProps | null) => {
              return cardProps ? <Card className='nb-poker-table-board-card' {...cardProps} /> : <div className='nb-poker-table-board-card'></div>
            })
          }
        </div>
      </div>
      
      <div className='nb-user-hud'>
        <div className='nb-user-hud-left'>
          <Button text='fold' className='nb-user-hud-left-btn' onClick={playerFold} />
        </div>
        
        <div className='nb-user-hud-center'>
          <div className='nb-user-hud-cards'>
            <Card className='nb-player-card' {...activePlayerData.hand?.leftCard} />
            <Card className='nb-player-card' {...activePlayerData.hand?.rightCard} />
          </div>
          <div className='nb-user-hud-info'>
            <div className='nb-user-hud-info-money'>${activePlayerData.money}</div>
            <div className='nb-user-hud-info-name'>{activePlayerData.name}</div>
          </div>
        </div>

        <div className='nb-user-hud-right'>
            <Button text='raise' className='nb-user-hud-right-btn' onClick={playerRaise} />
            <Button text='call' className='nb-user-hud-right-btn' onClick={playerCall} />
            <Button text='check' className='nb-user-hud-right-btn' onClick={playerCheck} />
        </div>
      </div>

      <div className='nb-players'>
        {
          otherPlayerData.map((playerData: PlayerConfig) => {
            return (
              <div className='nb-other-player-container'> 
                <PlayerCard 
                  name={playerData.name}
                  money={playerData.money} 
                  color={playerData.color}
                />
                <div className='nb-other-player-hand'> 
                  <Card {...playerData.hand?.leftCard} />
                  <Card {...playerData.hand?.rightCard} />
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Poker