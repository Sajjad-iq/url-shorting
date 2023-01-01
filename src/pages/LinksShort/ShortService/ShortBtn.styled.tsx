import styled from "styled-components";
import { device } from "../../../assets/GlobalStyles/breackPoints";
import { colors } from "../../../assets/GlobalStyles/colors";

export const ShortItBtn = styled.button`
 font-size: 1.1rem;
 color: white;
 background-color: ${colors.Cyan};
 font-weight: 700;
 border-radius: 10px;
 border:none;
 width:100%;
 height: 60px;

  @media ${device.laptop} {
     width:20%;
     margin-left:25px;
  }

  :hover{
     opacity: 0.8;
 }
`