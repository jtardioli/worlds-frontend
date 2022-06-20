import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./Components/buttonStyles";

export const worldsTheme = extendTheme({
  colors: {
    white: "#FFFFFF",
    dimWhite: "#DDDDDD",
    black: "#000000",
    main: "#9450b1",
  },
  styles: {
    global: {
      body: {
        bg: "black",
        color: "dimWhite",
      },
    },
  },
  components: {
    Button,
    Heading: {
      baseStyle: {
        letterSpacing: "2px",
      },
    },
  },
});
