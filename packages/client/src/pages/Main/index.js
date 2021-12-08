import React, { useState } from 'react';

import { Link } from 'react-router-dom';

// constants
import { BTN_TYPES, BTN_STYLES, BTN_COLOR } from 'constants/utils';
import { ROUTES } from 'constants/routes';

// components
import Button from 'components/Button/Button';
import AuthForm from 'components/AuthForm/AuthForm';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

// styles
import styles from './index.module.css';

const MainPage = () => {
  // Modal settings
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className={styles.mainPage}>
      <div className={`${styles.heroContent} ${styles.grid}`}>
        <div className={styles.textContent}>
          <h1>PokeStone</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            officia dignissimos assumenda praesentium odit unde, quis nostrum
            amet possimus maxime maiores nulla dolorum rerum aspernatur?
          </p>
          <Button
            btnType={BTN_TYPES.button}
            btnStyle={BTN_STYLES.outline.outlineDark}
            btnColor={BTN_COLOR.dark}
            value="Play"
            action={onOpenModal}
          />
        </div>
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: styles.modal,
        }}
      >
        <AuthForm />
      </Modal>
    </div>
  );
};

export default MainPage;
