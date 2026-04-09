export const colors = {
  background: {
    base: "#FFFFFF",
    surface: "#F0EFE0",
    label: "#F0EFE0",
    subtle: "#F6F5EA",
    muted: "#E8E6D6",
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
    softHover: "#F6F1D8",
  },

  border: {
    default: "#000000",
    subtle: "#D8D5C4",
    muted: "#BBB6A3",
  },

  focus: {
    ring: "#CE0F12",
  },

  state: {
    disabledBackground: "#E7E4D3",
    disabledText: "#767676",
    disabledBorder: "#BBB6A3",
    hoverSurface: "#F6F3DE",
    pressedSurface: "#E6E2CD",
  },
} as const;