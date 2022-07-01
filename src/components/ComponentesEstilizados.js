import React from "react";
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

export default function ComponentesEstilizados() {
  let mainColor = "#044F78",
    mainAlphaColor80 = "#044F7890",
    secondaryColor = "#BFC6D7",
    darkColor = "#1D1F39";

  const setTransitionTime = (time) => `all ${time} ease-in-out`;

  const fadeIn = keyframes`
  0% {opacity: 0} 100% {opacity:1}
  `;

  const H4Anima = styled.h4`
    animation: ${fadeIn} 2s ease-in-out;
    display: inline-block;
    border-radius: 1.25rem;
    padding: 1.5rem;
    color: ${darkColor};
    background-color: ${secondaryColor};
  `;

  const H4Mio = styled.h4`
    padding: 2rem;
    text-align: right;
    color: ${(props) => props.color};
    color: ${({ color }) => color};
    color: ${({ color }) => color || "#E3E46B"};
    // Arriba: renderizado condicional. Si tiene color definido en atributo que tome ese, sino el que indico aquí (#E3E46B30)
    background-color: ${mainColor};
    transition: ${setTransitionTime(".3s")};

    /*     ${({ isButton }) =>
      isButton &&
      css`
        margin: auto;
        max-width: 50%;
        border-radius: 1.5rem;
        cursor: pointer;
        text-align: center;
      `} // Si hay una propiedad "isButton" en las props (o sea si está como atributo en el elemento que estamos definiendo "H4Mio"), que lo convierta en botón con las características CSS definidas aquí. Pero como son muchas propiedades, tenemos que importar la función {CSS}, junto con styled */

    &:hover {
      background-color: ${mainAlphaColor80};
      color: ${({ color }) => (color ? color + "40" : "#E3E46B30")};
      // Si tiene color definido como atributo, cuando esté hover que la opacidad pase a 40%, si no tiene color como atributo que le ponga el color indicado (#E3E46B30)
    }
  `;

  const light = {
    color: "#222",
    bgColor: "#ddd",
  };

  const dark = {
    color: "#ddd",
    bgColor: "#222",
  };

  const Box = styled.div`
    padding: 1rem 3rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `;

  const BoxRounded = styled(Box)`
    border-radius: 1.5rem;
  `;

  const GlobalStyle = createGlobalStyle`
h3 {
 padding: 2rem;
background-color: #449;
}
`;

  return (
    <>
      <GlobalStyle />
      <h3>Styled-Components</h3>
      <H4Mio>
        h4 estilizado con "styled-components". El color lo toma de la var
        (const) al no estar definido como atributo
      </H4Mio>
      <H4Mio color="#64dafb" textAlign="center">
        h4 estilizado con "styled-components". El color definido como atributo
      </H4Mio>

      <H4Mio /*  isButton */>Soy un H4 Estilizado Botón</H4Mio>
      <H4Anima>H4 Animado</H4Anima>
      <ThemeProvider theme={light}>
        <Box>Soy una caja theme Light</Box>
        <BoxRounded>Soy una caja REDONDEADA theme Light</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy una caja theme Dark</Box>
        <BoxRounded>Soy una caja REDONDEADA theme dark</BoxRounded>
      </ThemeProvider>
    </>
  );
}
