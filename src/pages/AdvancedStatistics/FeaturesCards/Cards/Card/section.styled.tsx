import styled from "styled-components";
import { device } from "../../../../../assets/GlobalStyles/breackPoints";

export const Section = styled.section`
 width: 100%;
 height: 100px;
 display: flex;
 justify-content: center;
 align-items: center;
 position:absolute;
 top: -50px;
 padding:0 30px; 
 
 @media ${device.laptop} {
     justify-content: flex-start;

  }
`