import styled from "styled-components";
import { device } from "../../assets/GlobalStyles/breackPoints";

export const Wrapper = styled.section`
 width: 90%;
 display: none;
 justify-content: space-between;
 align-items: center;

  @media ${device.laptop} {
    display:flex ;
  }
`