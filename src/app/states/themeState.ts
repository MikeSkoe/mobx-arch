import { makeAutoObservable } from "mobx";

export type ThemeStateI = {
  isDarkTheme: boolean;
};

export class ThemeState implements ThemeStateI {
  public isDarkTheme = true;

  constructor() {
    makeAutoObservable(this);
  }
}
