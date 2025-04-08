export interface Match {
  id: number;
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
  round: string;
  winner: string;
  details?: string;
}
