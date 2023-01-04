import { makeAutoObservable } from "mobx";

export const enum Entity {
  Paper = "paper",
  Rock = "rock",
  Scissors = "scissors",
}

export type PlayerStateI = {
  isActionConfirmed: boolean;
  entity: Entity;
};

export class PlayerState implements PlayerStateI {
  public isActionConfirmed = false;
  public entity = Entity.Paper;

  constructor() {
    makeAutoObservable(this);
  }
}