import styled from "styled-components";
import { device } from "../../../assets/GlobalStyles/breackPoints";

export const Logo = styled.img`
 width: 130px ;
 height: auto;
 margin:25px;

 @media ${device.desktop} {
   width: 170px;
    margin:50px 25px;
  }
`