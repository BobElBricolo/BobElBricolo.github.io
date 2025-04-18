export class Tournament {
  id!: number;
  title!: {
    en: string;
    fr: string;
  };
  game!: string;
  date!: Date;
  image!: string;
  entryFee!: number;
  prize!: number;
  description!: {
    en: string;
    fr: string;
  };
  ended!: boolean;
  ranking!: PlayerRanking[];
  paiementLink!: string;
}

export class PlayerRanking {
  name!: string;
  points!: number;
}
