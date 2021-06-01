import { createGlobalStyle } from "styled-components";
import Notosans from "./NotoSansKR-Regular.otf";

export default createGlobalStyle`
    @font-face {
        font-family: 'NotoSans';
        src: local('NotoSans'),
        url(${Notosans}) format('otf');
        font-weight: 300;
        font-style: normal;
    }
`;