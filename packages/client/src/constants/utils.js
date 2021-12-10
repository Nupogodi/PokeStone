import {
  AiFillHome,
  AiOutlineQuestionCircle,
  AiOutlineLogin,
} from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { FaEllipsisV, FaSpinner } from 'react-icons/fa';
import { VscSignOut } from 'react-icons/vsc';
import { MdOutlineFormatListNumberedRtl } from 'react-icons/md';
import { ReactComponent as PlayIcon } from 'assets/img/poke-ball/poke-ball.svg';
import { ReactComponent as AttackIcon } from 'assets/img/icons/attack.svg';
import { ReactComponent as DefenseIcon } from 'assets/img/icons/defense.svg';
import { ReactComponent as StaminaIcon } from 'assets/img/icons/stamina.svg';
import { ReactComponent as SpeedIcon } from 'assets/img/icons/speed.svg';

export const ICONS = {
  home: AiFillHome,
  ellipsis: FaEllipsisV,
  game: PlayIcon,
  highScore: MdOutlineFormatListNumberedRtl,
  about: AiOutlineQuestionCircle,
  attack: AttackIcon,
  defense: DefenseIcon,
  speed: SpeedIcon,
  hp: StaminaIcon,
  signup: AiOutlineLogin,
  signin: AiOutlineLogin,
  signout: VscSignOut,
  user: BiUserCircle,
  loadingSpinner: FaSpinner,
};

export const ICON_TYPES = {
  edit: 'edit',
  home: 'home',
  game: 'game',
  ellipsis: 'ellipsis',
  setting: 'setting',
  highScore: 'highScore',
  about: 'about',
  attack: 'attack',
  defense: 'defense',
  hp: 'hp',
  signup: 'signup',
  signin: 'signin',
  signout: 'signout',
  user: 'user',
  speed: 'speed',
  loadingSpinner: 'loadingSpinner',
};

export const BTN_TYPES = {
  button: 'button',
  submit: 'submit',
};

export const BTN_STYLES = {
  fill: {
    fillLight: 'fillLight',
    fillDark: 'fillDark',
  },
  outline: {
    outlineLight: 'outlineLight',
    outlineDark: 'outlineDark',
  },
};

export const BTN_COLOR = {
  light: 'light',
  dark: 'dark',
};
