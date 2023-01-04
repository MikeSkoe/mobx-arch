import { PlayerServiceContext } from 'app/services/context';
import { Entity } from 'app/states/playerState';
import { observer } from 'mobx-react';
import * as React from 'react';
import { useContext } from 'react';
// import * as style from './style.css';

export const Container = observer(() => {
  const playerService = useContext(PlayerServiceContext);

  return (
    <>
      <h1>
        {playerService.playerEntity}
      </h1>
      <div>
        <button onClick={() => playerService.setConfirmed()}>
          {"Confirm"}
        </button>
      </div>
      <div>
        {[Entity.Paper, Entity.Rock, Entity.Scissors].map(entity => (
          <button onClick={() => playerService.setEntity(entity)}>
            {entity}
          </button>
        ))}
      </div>
    </>
  );
});
