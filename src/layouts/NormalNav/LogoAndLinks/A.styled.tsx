import styled from "styled-components";
import { device } from "../../../assets/GlobalStyles/breackPoints";
import { colors } from "../../../assets/GlobalStyles/colors";

export const A = styled.a`
 color: ${colors.VeryDarkViolet};
 font-weight: 500;
 margin: 0 10px;
 text-decoration: none;
 font-size:0.8rem;

 @media ${device.desktop} {
     font-size: 1rem;
     margin: 0 15px;
  }
 :hover{
    color: ${colors.GrayishViolet};
 }
`