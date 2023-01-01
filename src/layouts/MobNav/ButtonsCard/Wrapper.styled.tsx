import styled from "styled-components";
interface Props {
    display: string
}
export const Wrapper = styled.section<Props>`
 width: 100%;
 height: 100vh;
 display: ${p => p.display};
 justify-content: center;
 align-items: center;
 position: absolute;
 top: 0;
 left:0;
 z-index:10;
`