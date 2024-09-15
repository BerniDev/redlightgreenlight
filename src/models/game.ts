export enum LightColor {
  none = "#0d0d0d",
  red = "indianred",
  green = "lightgreen",
}

export enum Step {
  right = "right",
  left = "left",
}

export interface PlayerInfo {
  name: string;
  score: number;
}

export type Ranking = PlayerInfo[];