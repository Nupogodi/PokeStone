import React, { useState, useEffect } from 'react';

// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/material/components/Header/Header.js";
import Footer from "components/material/components/Footer/Footer.js";
import GridContainer from "components/material/components/Grid/GridContainer.js";
import GridItem from "components/material/components/Grid/GridItem.js";
import Button from "components/material/components/CustomButtons/Button.js";
import Parallax from "components/material/components/Parallax/Parallax.js";
// // sections for this page
import HeaderLinks from "components/material/components/Header/HeaderLinks.js";
// import SectionBasics from "../Components/Sections/SectionBasics.js";
// import SectionNavbars from "../Components/Sections/SectionNavbars.js";
// import SectionTabs from "../Components/Sections/SectionTabs.js";
// import SectionPills from "../Components/Sections/SectionPills.js";
// import SectionNotifications from "../Components/Sections/SectionNotifications.js";
// import SectionTypography from "../Components/Sections/SectionTypography.js";
// import SectionJavascript from "../Components/Sections/SectionJavascript.js";
// import SectionCarousel from "../Components/Sections/SectionCarousel.js";
// import SectionCompletedExamples from "../Components/Sections/SectionCompletedExamples.js";
// import SectionLogin from "../Components/Sections/SectionLogin.js";
// import SectionExamples from "../Components/Sections/SectionExamples.js";
// import SectionDownload from "../Components/Sections/SectionDownload.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

import styles from "assets/styles/jss/material-kit-react/views/landingPage";
import AboutPage from 'pages/About/index';


import { pokemonApi } from '../../utils/api';
import useRequest from '../../hooks/useRequest';

const dashboardRoutes = [];
const useStyles = makeStyles(styles);



const MainPage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;


  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await pokemonApi.get('/pokemon', {
          params: {
            limit: 20,
          },
        });
        setPokemonList(response.data.results)
        console.log(pokemonList);
      } catch (error) {
        console.lor(error);
      }
    };

    getPokemon();
  }, []);

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="PokeStone"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/pokemon-hero-2.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Cool Subheading</h1>
              <h4>
                Project Description!! lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consectetur.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="#"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Play Game
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;


//  <section className='hero'>
// <Typography variant='h1' component='div'>
// PokeStone
// </Typography>
// <div className='img-wrapper'>
// {/* <HeroImage /> */}
// </div>
// </section>
// <section className='description'>
// <Typography variant='body1' gutterBottom>
// body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
// blanditiis tenetur unde suscipit, quam beatae rerum inventore
// consectetur, neque doloribus, cupiditate numquam dignissimos laborum
// fugiat deleniti? Eum quasi quidem quibusdam.
// </Typography>
// </section>
