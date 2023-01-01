import styled from "styled-components";

interface Props {
  width: string
  height: string
  color: string
  BackgroundColor: string
  padding: string
  MarginBottom: string
  fontSize: string
}
export const Button = styled.button<Props>`
 width:${p => p.width} ;
 height: ${p => p.height};
 color: ${p => p.color};
 background: none;
 background-color:${p => p.BackgroundColor} ;
 font-weight: 700;
 font-family: 'Poppins', sans-serif;
 border: none;
 z-index:10;
 padding:${p => p.padding};
 margin-bottom:${p => p.MarginBottom};
 font-size:${p => p.fontSize};
 border-radius: 8px;
 z-index:20;
`