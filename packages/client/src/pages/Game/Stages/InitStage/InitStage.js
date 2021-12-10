import React from 'react';
import { useHistory } from 'react-router-dom';

// Auth
import { useAuth } from 'hooks/useAuth';

// Constants
import {
  BTN_TYPES,
  BTN_COLOR,
  BTN_STYLES,
  STAGES_CONFIG,
  ROUTES,
} from 'constants/index';

// Components
import Button from 'components/Button/Button';

const InitStage = ({ setCurrentGameStage }) => {
  const {
    state: { isAuthenticated },
  } = useAuth();

  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  };

  return (
    <>
      <img
        style={{ width: '100%', display: 'block' }}
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FKG6NrT3.jpg&f=1&nofb=1"
        alt="pokemons standing"
      />
      <h2>Rules</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        delectus! Explicabo voluptatum consectetur itaque obcaecati quia odio
        fuga totam architecto aliquid quas temporibus libero perferendis dolore
        aliquam reiciendis id, nulla tenetur laborum minus cumque voluptates
        aperiam! Suscipit, eum odio libero accusantium ex a quidem facere atque
        earum iusto sapiente nemo?
      </p>

      {isAuthenticated ? (
        <Button
          btnType={BTN_TYPES.button}
          btnStyle={BTN_STYLES.outline.outlineDark}
          btnColor={BTN_COLOR.dark}
          onClick={() => setCurrentGameStage(STAGES_CONFIG.selection)}
        >
          Play
        </Button>
      ) : (
        <Button
          btnType={BTN_TYPES.button}
          btnStyle={BTN_STYLES.outline.outlineDark}
          btnColor={BTN_COLOR.dark}
          onClick={() => routeChange(ROUTES.auth.url)}
        >
          Sign in
        </Button>
      )}
    </>
  );
};

export default InitStage;
