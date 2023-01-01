import styled from "styled-components";
import { colors } from "../../../assets/GlobalStyles/colors";

export const A = styled.a`
 font-size: 1rem;
 color: white;
 font-weight: 500;
 margin: 5px;
 border-radius: 30px;
 display: flex;
 justify-content: center;
 align-items: center;
 width:95%;
 height: 50px;

 :hover{
   background-color: ${colors.Cyan};
 }
`