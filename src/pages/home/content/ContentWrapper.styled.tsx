import styled from "styled-components";
import { device } from "../../../assets/GlobalStyles/breackPoints";

export const ContentWrapper = styled.section`
 width: 95%;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 text-align: center;
 margin-bottom: 175px;

 @media ${device.laptop} {
    margin-bottom:15px;
    text-align: start;
    align-items: flex-start;
    width: 44%;

  }
`