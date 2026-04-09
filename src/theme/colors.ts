export const colors = {
  background: {
    base: "#FFFFFF",
    surface: "#FFFFFF",
    label: "#F9EAEA",
    subtle: "#F7F7F7",
    muted: "#F3F3F3",
  },

  text: {
    primary: "#000000",
    secondary: "#4F4F4F",
    tertiary: "#767676",
    inverse: "#FFFFFF",
  },

  accent: {
    primary: "#CE0F12",
    hover: "#B50D10",
    pressed: "#990B0D",
    soft: "#F9EAEA",
    softHover: "#F7E0E0",
  },

  border: {
    default: "#000000",
    subtle: "#D9D9D9",
    muted: "#BDBDBD",
  },

  focus: {
    ring: "#CE0F12",
  },

  state: {
    disabledBackground: "#F3F3F3",
    disabledText: "#767676",
    disabledBorder: "#BDBDBD",
    hoverSurface: "#F7F7F7",
    pressedSurface: "#ECECEC",
  },
} as const;