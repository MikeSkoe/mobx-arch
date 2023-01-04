import * as React from 'react';
import { PlayerService } from './services/PlayerService';
import { PlayerState } from './states/PlayerState';
import { GameState, GameStateI } from './states/GameState';
import { PlayerServiceContext, ThemeServiceContext } from './services/context';
import { ThemeService } from './services/themeService';
import { ThemeState } from './states/themeState';
import { Container } from './containers/Container';

export const App = () => {
  /**
   * States are simple objects without dependencies or methods to manipulate them
   * Only services and transports can mutate them
   * 
   * Idealy some states are changes only by transport to hold slices of backend states
   * and some only by services to hold local state
   * to prevent raice condition
   */
  const [playerState] = React.useState(new PlayerState());
  const [gameState] = React.useState(new GameState());
  const [themeState] = React.useState(new ThemeState());

  /**
   * Transports: sync states with backend
   * Depend only on states
   */
  useGameTransport(gameState);

  /**
   * Services: business logic part
   * Depend only on states (their interfaces)
   */
  const [playerService] = React.useState(new PlayerService(playerState, gameState));
  const [themeService] = React.useState(new ThemeService(themeState));

  /**
   * Each service has its own context
   * It helps to easily provide to components only required parts of logic
   * and write unit tests, assembling only tested parts
   */
  return (
    <PlayerServiceContext.Provider value={playerService}>
      <ThemeServiceContext.Provider value={themeService}>
        <Container />
      </ThemeServiceContext.Provider>
    </PlayerServiceContext.Provider>
  );
};

function useGameTransport(gameState: GameStateI) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      gameState.gameIsRunning = !gameState.gameIsRunning;
    })

    return () => clearTimeout(timer);
  })
}
