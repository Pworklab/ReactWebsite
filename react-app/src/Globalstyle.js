import {createGlobalStyle} from 'styled-components';
import MarkerbysueFont from './assets/fonts/Markerbysue-Regular.ttf';


// 自分のフォントを使ってみる。
const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Markerbysue';
    src: url(${MarkerbysueFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Markerbysue', sans-serif;
  }
`;
export default GlobalStyle;