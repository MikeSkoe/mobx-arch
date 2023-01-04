import { GameStateI } from "app/states/gameState";
import { Entity, PlayerStateI } from "app/states/playerState";
import { makeAutoObservable } from "mobx";

export class PlayerService {
  constructor(
    private playerState: PlayerStateI,
    private gameState: GameStateI,
  ) {
    makeAutoObservable(this);
  }

  public get playerEntity(): string {
    if (!this.gameState.gameIsRunning) {
      return this.playerState.entity;
    }

    return this.playerState.isActionConfirmed
      ? `confirmed: ${this.playerState.entity}`
      : `not confirmed: ${this.playerState.entity}`;
  }

  public setConfirmed() {
    this.playerState.isActionConfirmed = true;
  }

  public setEntity(entity: Entity) {
    if (this.gameState.gameIsRunning && !this.playerState.isActionConfirmed) {
      this.playerState.entity = entity;
    }
  }
}
