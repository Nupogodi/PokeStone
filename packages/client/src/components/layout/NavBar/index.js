import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// constants
import { ROUTES } from 'constants/routes';

const { SubMenu } = Menu;
const NavBar = function () {
  const NAV_BAR_MENU_KEYS = {
    home: {
      key: 'home',
      title: 'Home',
    },

    game: {
      key: 'game',
      title: 'Game',
    },

    account: {
      key: 'account',
      title: 'Account',
    },

    highScore: {
      key: 'highScore',
      title: 'High Score',
    },

    about: {
      key: 'about',
      title: 'About',
    },
  };

  const [currentMenu, setCurrentMenu] = useState('mail');

  const handleClick = (e) => {
    setCurrentMenu(e.key);
  };

  return null;
  // <div
  //   onClick={(e) => handleClick(e)}
  //   selectedKeys={[currentMenu]}
  //   mode='horizontal'
  //   style={{ height: 'var(--navbar-height)' }}
  // >
  //   <Menu.Item key={NAV_BAR_MENU_KEYS.home.key} icon={<HomeOutlined />}>
  //     <NavLink to={ROUTES.main.url}>{NAV_BAR_MENU_KEYS.home.title}</NavLink>
  //   </Menu.Item>
  //   <Menu.Item key={NAV_BAR_MENU_KEYS.game.key} icon={<AppstoreOutlined />}>
  //     <NavLink to={ROUTES.game.url}>{NAV_BAR_MENU_KEYS.game.title}</NavLink>
  //   </Menu.Item>
  //   <SubMenu key='SubMenu' icon={<SettingOutlined />} title='More'>
  //     <Menu.ItemGroup>
  //       <Menu.Item
  //         key={NAV_BAR_MENU_KEYS.account.key}
  //         icon={<UserOutlined />}
  //       >
  //         {NAV_BAR_MENU_KEYS.account.title}
  //       </Menu.Item>
  //       <Menu.Item
  //         key={NAV_BAR_MENU_KEYS.highScore.key}
  //         icon={<FieldNumberOutlined />}
  //       >
  //         {NAV_BAR_MENU_KEYS.highScore.title}
  //       </Menu.Item>
  //     </Menu.ItemGroup>
  //   </SubMenu>
  //   <Menu.Item key={NAV_BAR_MENU_KEYS.about.key} icon={<LinkOutlined />}>
  //     {NAV_BAR_MENU_KEYS.about.title}
  //   </Menu.Item>
  // </div>
};

export default NavBar;
