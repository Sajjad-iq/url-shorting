import styled from "styled-components";
import { device } from "../../../assets/GlobalStyles/breackPoints";

export const Wrapper = styled.section`
 width: 100%;
 height: 1200px ;
 display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
 border:none;

 @media ${device.laptop} {
    height: 600px;
  }
  @media ${device.laptopL} {
    height: 750px;
  }

  @media ${device.desktop} {
    height: 900px;
  }
`