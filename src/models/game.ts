export enum LightColor {
  none = "#0d0d0d",
  red = "darkRed",
  green = "darkGreen",
}

export enum GameState {
  init = "init",
  redLight = LightColor.red,
  greenLight = LightColor.green,
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