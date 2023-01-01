import styled from "styled-components";
import { device } from "../../../assets/GlobalStyles/breackPoints";
import { colors } from "../../../assets/GlobalStyles/colors";
import shorten from '../../../assets/images/bg-shorten-desktop.svg'

export const CardForm = styled.form`
 width: 90%;
 height: 200px;
 display: flex;
 justify-content: space-around;
 align-items: center;
 flex-direction: column;
 padding:20px;
 background-color: ${colors.DarkViolet};
 background-image: url(${shorten});
 border-radius:10px ;
 position:absolute;
 top:-100px;
 background-size: cover;
 background-repeat: no-repeat;

 @media ${device.laptop} {
    flex-direction: row;
    height: 150px;
    width: 88%;
    padding:50px
  }
`