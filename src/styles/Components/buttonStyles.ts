import { blacken } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  baseStyle: {
    borderRadius: "15px",
    _focus: { boxShadow: "none" },
  },

  sizes: {},

  variants: {
    basic: {
      bg: "dimWhite",
      color: "black",
      _hover: {
        bg: blacken("dimWhite", 15),
      },
      w: "10rem",
      h: "2.5rem",
      fontSize: "0.85rem",
    },
    hollow: {
      border: "2px solid #DDDDDD",
      color: "dimWhite",
      _hover: {
        border: "2px solid #AAAAAA",
        color: "#AAAAAA",
      },
      w: "10rem",
      h: "2.7rem",
      fontSize: "0.85rem",
    },
  },

  defaultProps: {},
};
