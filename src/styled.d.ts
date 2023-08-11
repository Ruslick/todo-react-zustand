import { ITheme } from 'interfaces/styled';
import { baseTheme } from './assets/styles/GlobalTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends {color: "red"} {}
}