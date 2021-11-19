import React from 'react';

import { NavLink } from 'react-router-dom';

// constants
import { BTN_TYPES, BTN_STYLES, BTN_COLOR } from 'constants/utils';
import { ROUTES } from 'constants/routes';

// components
import Container from 'components/wrappers/Container/Container';
import Button from 'components/Button/Button';

// typography
import { Title, Text } from 'components/Typography/Typography';

// styles
import styles from './index.module.css';

const { Content } = Layout;

const MainPage = function () {
  return (
      <Layout>
        <Content>
          <div className={`${styles.heroContent} ${styles.grid}`}>
            <Container>
                  <div className={styles.textContent}>
              <Title type="secondary" level={1}>
                      <div className={styles.whiteText}>PokeStone</div>
                  </Title>
              <Text>
                      Lorem ipsum, dolor sit amet consectetur adipisicing
                      elit. Eligendi officia dignissimos assumenda
                      praesentium odit unde, quis nostrum amet possimus
                      maxime maiores nulla dolorum rerum aspernatur?
              </Text>
                <NavLink to={ROUTES.game.url}>
                      <Button
                  btnType={BTN_TYPES.button}
                      btnStyle={BTN_STYLES.outline.outlineDark}
                      btnColor={BTN_COLOR.dark}
                  value="Play"
                />
                  </NavLink>
            </div>
          </Container>
        </div>
      </Content>
    </Layout>
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
