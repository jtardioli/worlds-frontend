import { blacken } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  baseStyle: {
    borderRadius: "3px",
    _focus: { boxShadow: "none" },
  },

  sizes: {},

  variants: {
    basic: {
      bg: "main",
      color: "black",
      _hover: {
        bg: blacken("main", 12),
      },
      w: "10rem",
      h: "2.3rem",
      letterSpacing: "2px",
    },
  },

  defaultProps: {},
};
