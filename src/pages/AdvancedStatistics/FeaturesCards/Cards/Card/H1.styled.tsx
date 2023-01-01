import styled from "styled-components";
import { device } from "../../../../../assets/GlobalStyles/breackPoints";
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

 @media ${device.desktop} {
     font-size:1.7rem;
  }
`