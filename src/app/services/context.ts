import * as React from "react";

import { PlayerService } from "./PlayerService";
import { ThemeService } from "./themeService";

export const PlayerServiceContext = React.createContext<PlayerService>(null);
export const ThemeServiceContext = React.createContext<ThemeService>(null);
