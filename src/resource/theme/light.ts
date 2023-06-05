import { I_useTheme } from './theme';
import default_color_code from '../color/default_color_code';

const color_source = default_color_code;

const light_theme: I_useTheme = {
  dark: false,
  colors: {
    ...color_source.light,
    typo: {
      title: color_source.neutral[0],
      body: color_source.neutral[40],
      caption: color_source.neutral[50],
    },
  },
};

export default light_theme;
