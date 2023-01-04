import { makeAutoObservable } from "mobx";

export type GameStateI = {
  gameIsRunning: boolean;
};

export class GameState implements GameStateI {
  public gameIsRunning = true;

  constructor() {
    makeAutoObservable(this);
  }
}
