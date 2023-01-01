import styled from "styled-components";
import { device } from "../../../assets/GlobalStyles/breackPoints";
import { colors } from "../../../assets/GlobalStyles/colors";

export const A = styled.a`
 font-size: 0.8rem;
 color: ${colors.VeryDarkViolet};
 font-weight: 500;
 margin: 5px;
 border-radius: 20px;
 display: flex;
 justify-content: center;
 align-items: center;
 padding:8px 15px; 

 @media ${device.desktop} {
     font-size: 1rem;
  }
  
 :hover{
   background-color: ${colors.Cyan};
   color: white;

 }
`