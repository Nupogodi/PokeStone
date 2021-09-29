import React, {Fragment} from 'react';

// material-ui components
import { makeStyles } from "@material-ui/core/styles";

// material ui core components
import Card from 'components/material/components/Card/Card.js';
import CardHeader from 'components/material/components/Card/CardHeader.js';
import CardBody from 'components/material/components/Card/CardBody.js';
import Button from "components/material/components/CustomButtons/Button.js";
import GridContainer from "components/material/components/Grid/GridContainer.js";
import GridItem from "components/material/components/Grid/GridItem.js";
import CustomInput from "components/material/components/CustomInput/CustomInput.js";

import imagesStyles from "assets/styles/jss/material-kit-react/imagesStyles.js";

import { cardTitle, cardLink, cardSubtitle } from "assets/styles/jss/material-kit-react.js";

const styles = {
    ...imagesStyles,
    cardTitle,
    cardLink,
    cardSubtitle
  };

const useStyles = makeStyles(styles);

const InitStage = (props) => {
    const classes = useStyles();

  return (
    <Fragment>
      <CardBody>
      <img
        style={{width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FKG6NrT3.jpg&f=1&nofb=1"
        alt="cad image"
      />
        <h2 className={classes.cardTitle}>Rules</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, delectus! Explicabo voluptatum consectetur itaque obcaecati quia odio fuga totam architecto aliquid quas temporibus libero perferendis dolore aliquam reiciendis id, nulla tenetur laborum minus cumque voluptates aperiam! Suscipit, eum odio libero accusantium ex a quidem facere atque earum iusto sapiente nemo?</p>
          <GridContainer>
              <GridItem>
              <CustomInput
                labelText="Username"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
            />
              </GridItem>
              <GridItem>
              <CustomInput
                labelText="Password (Optional)"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    type:"password"
                }}
            />
              </GridItem>
          </GridContainer>
          <Button color="primary">Start</Button>
      </CardBody>
    </Fragment>
  );
};

export default InitStage;
