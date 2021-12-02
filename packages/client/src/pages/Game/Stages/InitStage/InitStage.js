import React, { Fragment } from 'react';

// Constants
import {
  BTN_TYPES,
  BTN_COLOR,
  BTN_STYLES,
  STAGES_CONFIG,
} from 'constants/index';

// Components
import Button from 'components/Button/Button';

const InitStage = ({ setCurrentGameStage }) => {
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
      <Button
        btnType={BTN_TYPES.button}
        btnStyle={BTN_STYLES.outline.outlineDark}
        btnColor={BTN_COLOR.dark}
        value="Play Game"
        action={() => setCurrentGameStage(STAGES_CONFIG.selection)}
      />
    </>
  );
};

export default InitStage;
