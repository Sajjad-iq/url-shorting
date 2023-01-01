import styled from "styled-components";
import { device } from "../../../assets/GlobalStyles/breackPoints";
import { colors } from "../../../assets/GlobalStyles/colors";

export const A = styled.a`
 font-size: 1.1rem;
 color: white;
 background-color: ${colors.Cyan};
 font-weight: 700;
 margin: 20px;
 border-radius: 30px;
 display: flex;
 justify-content: center;
 align-items: center;
 width:200px;
 height: 60px;

  @media ${device.laptop} {
     width:160px;
     height: 50px;
     font-size: 0.9rem;
  }

  @media ${device.desktop} {
     width:200px;
     height: 75px;
     font-size: 1.2rem;
     margin-top:30px;
  }
`