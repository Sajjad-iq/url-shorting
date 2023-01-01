import styled from "styled-components";
import { device } from "../../../../assets/GlobalStyles/breackPoints";

export const Wrapper = styled.section`
 width: 90%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 border-radius: 10px;
 background-color: white;
 margin:10px;
   
  @media ${device.laptop} {
     flex-direction: row;
     padding:10px 20px;
     width: 88%;
  }
`