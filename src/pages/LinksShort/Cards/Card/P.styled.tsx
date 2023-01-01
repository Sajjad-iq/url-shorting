import styled from "styled-components";
import { colors } from "../../../../assets/GlobalStyles/colors";
interface Props {
    fontSize: string,
    color: string
}
export const P = styled.p<Props>`
 font-size: ${p => p.fontSize};
 color: ${p => p.color};
 font-weight: 500;
 margin: 10px;
 width: 100%;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 `