import { ThemeStateI } from "app/states/themeState";
import { makeAutoObservable } from "mobx";

export const enum Theme {
    Dark = "dark",
    Light = "light",
}

export class ThemeService {
    constructor(private themeState: ThemeStateI) {
        makeAutoObservable(this);
    }

    public toggleTheme() {
        this.themeState.isDarkTheme = !this.themeState.isDarkTheme;
    }

    get theme(): Theme {
        if (this.themeState.isDarkTheme) {
            return Theme.Dark;
        }

        return Theme.Light;
    }
}