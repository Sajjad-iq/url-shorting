import styled from "styled-components";

interface Props {
    width: string
    height: string
}

export const IMG = styled.img<Props>`
 width: ${p => p.width};
 height: ${p => p.height};
`