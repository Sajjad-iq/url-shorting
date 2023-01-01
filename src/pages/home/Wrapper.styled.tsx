import styled from "styled-components";
import { device } from "../../assets/GlobalStyles/breackPoints";

export const Wrapper = styled.section`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row-reverse;
    margin-bottom:100px;
    justify-content: flex-start;

  }
`