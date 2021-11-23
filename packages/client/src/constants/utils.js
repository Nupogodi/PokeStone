import {
  AiFillHome,
  AiFillPlayCircle,
  AiOutlineQuestionCircle,
} from 'react-icons/ai';
import { FaEllipsisV } from 'react-icons/fa';
import { MdOutlineFormatListNumberedRtl } from 'react-icons/md';
import { ReactComponent as ReactLogo } from 'assets/img/poke-ball/poke-ball.svg';

export const ICONS = {
  home: AiFillHome,
  ellipsis: FaEllipsisV,
  game: ReactLogo,
  highScore: MdOutlineFormatListNumberedRtl,
  about: AiOutlineQuestionCircle,
};

export const ICON_TYPES = {
  edit: 'edit',
  home: 'home',
  game: 'game',
  ellipsis: 'ellipsis',
  setting: 'setting',
  highScore: 'highScore',
  about: 'about',
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
