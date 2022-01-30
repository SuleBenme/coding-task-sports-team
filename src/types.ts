export interface Competition {
  code: string;
  id: number;
  name: string;
  emblemUrl?: string;
}
export interface Match {
  id: number;
  names: Names;
  utcDate: string;
  result: Fulltime;
  status: string;
}

interface Fulltime {
  awayTeam?: number;
  homeTeam?: number;
}

interface Names {
  awayTeam: string;
  homeTeam: string;
}
