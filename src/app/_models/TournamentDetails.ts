export class Tournament {
  id!: number;
  title!: string;
  game!: string;
  date!: Date;
  image!: string;
  entryFee!: number;
  prize!: number;
  description!: string;
  ended!: boolean;
  ranking!: PlayerRanking[];
  paiementLink!: string;
}

export class PlayerRanking {
  name!: string;
  points!: number;
}
