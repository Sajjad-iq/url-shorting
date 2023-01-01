import styled from "styled-components";
import { device } from "../../../../../assets/GlobalStyles/breackPoints";
interface Props {
  alignSelf: string
}
export const CardWrapper = styled.section<Props>`
 width: 350px;
 height: 275px ;
 display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
 flex-direction: column;
 background-color: white;
 border-radius: 10px;
 padding:10px;
 padding-top: 45px;
 align-self: ${p => p.alignSelf};
 margin:45px 0;

   @media ${device.tablet} {
      width: 500px;
 }
  @media ${device.laptop} {
    width: 30%;
     height: 300px ;
  }
  @media ${device.laptopL} {
     height: 300px ;
  }
  @media ${device.desktop} {
     height: 400px ;
  }
 
`