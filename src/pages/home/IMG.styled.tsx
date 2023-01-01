import styled from "styled-components";
import { device } from "../../assets/GlobalStyles/breackPoints";

export const IMG = styled.img`
 width: 450px;
 align-self: flex-end;
 object-position: bottom 0px left 100px;
 margin: 30px 0;

 @media ${device.tablet} {
     width: 600px;
  }@media ${device.laptop} {
     width: 50%;
  }
`