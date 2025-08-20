// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      sidebar: string;
      text: string;
      textSecondary: string;
      danger: string;
      success: string;
    };
    spacing: (factor: number) => string;
    borderRadius: string;
    shadows: {
      card: string;
    };
    typography: {
      fontFamily: string;
      h1: string;
      h2: string;
      body: string;
      small: string;
    };
  }
}
