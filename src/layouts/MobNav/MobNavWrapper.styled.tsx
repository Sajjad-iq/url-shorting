import styled from "styled-components";
import { device } from "../../assets/GlobalStyles/breackPoints";

export const MobNavWrapper = styled.section`
 width: 90%;
 height: fit-content;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding:10px;
 margin-top:20px;

   @media ${device.laptop} {
    display:none ;
  }
`