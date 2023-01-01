import styled from "styled-components";
import { device } from "../../../assets/GlobalStyles/breackPoints";
import { colors } from "../../../assets/GlobalStyles/colors";

export const CyanLine = styled.div`
 width: 10px;
 background-color:${colors.Cyan} ;
 height: 75% ;
 border:none;

 @media ${device.laptop} {
    width: 75%;
    height: 10px;
  }
`