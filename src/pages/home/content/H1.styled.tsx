import styled from "styled-components";
import { device } from "../../../assets/GlobalStyles/breackPoints";

interface Props {
  fontSize: string
  color: string
}
export const H1 = styled.h1<Props>`
 font-size: ${p => p.fontSize};
 color: ${p => p.color};
 font-weight: 700;
 line-height: 50px ;
 margin: 10px;

  @media ${device.laptop} {
     font-size:2.6rem;
     line-height: 60px ;
  }
   @media ${device.desktop} {
     font-size:4rem;
     line-height: 90px ;
  }
`