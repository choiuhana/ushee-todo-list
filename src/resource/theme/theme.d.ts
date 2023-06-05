import { Theme } from '@react-navigation/native';

// @ts-ignore 기본 theme type 간섭을 받아 어시스트 되는것을 방지하고자 함
interface I_useTheme extends Theme {
  dark: boolean;
  colors: {
    typo: {
      title: string;
      body: string;
      caption: string;
    };
    primary: string;
    on_primary: string;
    primary_container: string;
    on_primary_container: string;

    secondary: string;
    on_secondary: string;
    secondary_container: string;
    on_secondary_container: string;

    tertiary: string;
    on_tertiary: string;
    tertiary_container: string;
    on_tertiary_container: string;

    error: string;
    on_error: string;
    error_container: string;
    on_error_container: string;

    background: string;
    on_background: string;
    surface: string;
    on_surface: string;
    surface_variant: string;
    on_surface_variant: string;
    outline: string;
  };

  // images: {};
}

declare module '@react-navigation/native' {
  export function useTheme(): I_useTheme;
}
