import styled from "styled-components";
import { device } from "../../../../assets/GlobalStyles/breackPoints";
interface Props {
    borderBottom: string
}
export const Section = styled.section<Props>`
 width: 98%;
 display: flex;
 justify-content: center;
 align-items: flex-start;
 border-bottom:${p => p.borderBottom} ;
 flex-direction: column;
 padding:5px;

 @media ${device.laptop} {
     border-bottom:unset
  }
`