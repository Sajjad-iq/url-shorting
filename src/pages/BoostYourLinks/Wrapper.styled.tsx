import styled from "styled-components";
import { colors } from "../../assets/GlobalStyles/colors";
import background from '../../assets/images/bg-boost-desktop.svg';

export const Wrapper = styled.section`
 width: 100%;
 height: 250px;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 background: url(${background});
 background-color:${colors.DarkViolet} ;
 background-repeat: no-repeat;
`