import { Player } from "./player";

export interface Room {
  name: string,
  code: string,
  players: Player[],
}