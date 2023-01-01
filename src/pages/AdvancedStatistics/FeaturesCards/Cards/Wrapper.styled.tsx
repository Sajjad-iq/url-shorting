import styled from "styled-components";
import { device } from "../../../../assets/GlobalStyles/breackPoints";

export const Wrapper = styled.section`
 width: 350px;
 height: fit-content;
 display: flex;
 justify-content: space-between;
 align-items: center;
 flex-direction: column;
 position:absolute;
 top: 50%;  
 left: 50%; 
 transform: translate(-50%, -50%);
 
   @media ${device.tablet} {
    width: 500px;
  }
  @media ${device.laptop} {
    width: 95%;
    height: 500px;
    flex-direction: row;
  }

  @media ${device.laptopL} {
    width: 88%;
    height: 600px;
    flex-direction: row;
  }

  @media ${device.desktop} {
    height: 650px;
  }
`