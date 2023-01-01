import styled from "styled-components";
import { device } from "../../assets/GlobalStyles/breackPoints";
import { colors } from "../../assets/GlobalStyles/colors";

export const Wrapper = styled.section`
 width: 100%;
 min-height: 150px;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 position: relative;
 background-color:${colors.Gray} ;
 padding-top: 110px;
 border:none;

  @media ${device.laptop} {
     padding-top: 60px;
  }
`