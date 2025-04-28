export interface Player {
  id: string;
  username: string;
  points: number;
  odds: number | null;
  bets: number;
  totalAmountBet?: number;
}

export interface BetTournament {
  id: string;
  title: string;
  game: string;
  image: string;
  ranking: Player[];
  betsClosed?: boolean;
  ownerId: string;
}

export interface UserBet {
  playerId: string;
  amount: number;
}

