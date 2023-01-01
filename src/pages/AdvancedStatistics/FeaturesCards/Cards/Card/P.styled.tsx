import styled from "styled-components";
import { device } from "../../../../../assets/GlobalStyles/breackPoints";
interface Props {
    fontSize: string,
    color: string
}
export const P = styled.p<Props>`
 font-size: ${p => p.fontSize};
 color: ${p => p.color};
 font-weight: 500;
 margin: 10px;
 text-align: center;

 @media ${device.desktop} {
     font-size:1.2rem;
  }
 `