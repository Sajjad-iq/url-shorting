import styled from "styled-components";
import { device } from "../../assets/GlobalStyles/breackPoints";
import { colors } from "../../assets/GlobalStyles/colors";
interface Props {
    fontSize: string
}
export const H1 = styled.h1<Props>`
 font-size: ${p => p.fontSize};
 color: white;
 font-weight: 700;
 line-height: 50px ;
 margin: 10px;
 text-align: center;

 @media ${device.desktop} {
     font-size:2.5rem;
  }
`