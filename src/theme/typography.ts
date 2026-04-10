import { css } from "@emotion/react";

const fontFamily = {
  heading: `"Cormorant Garamond", serif`,
  body: `"Inter", sans-serif`,
};

export const typography = {
  display: {
    xlarge: css`
      font-family: ${fontFamily.heading};
      font-size: 72px;
      font-weight: 400;
      line-height: 1.2;
    `,
    
    large: css`
      font-family: ${fontFamily.heading};
      font-size: 56px;
      font-weight: 400;
      line-height: 1.2;
    `,
  },

  heading: {
    large: css`
      font-family: ${fontFamily.heading};
      font-size: 40px;
      font-weight: 400;
      line-height: 1.2;
    `,
    medium: css`
      font-family: ${fontFamily.heading};
      font-size: 32px;
      font-weight: 400;
      line-height: 1.3;
    `,
    small: css`
      font-family: ${fontFamily.heading};
      font-size: 24px;
      font-weight: 400;
      line-height: 1.3;
    `,
  },

  body: {
    large: css`
      font-family: ${fontFamily.body};
      font-size: 18px;
      font-weight: 400;
      line-height: 1.5;
    `,
    medium: css`
      font-family: ${fontFamily.body};
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    `,
    small: css`
      font-family: ${fontFamily.body};
      font-size: 14px;
      font-weight: 400;
      line-height: 1.4;
    `,

    xsmall: css`
      font-family: ${fontFamily.body};
      font-size: 12px;
      font-weight: 400;
      line-height: 1.4;
    `,
  },

  caption: {
    medium: css`
      font-family: ${fontFamily.body};
      font-size: 12px;
      font-weight: 400;
      line-height: 1.3;
    `,
  },

  button: {
    medium: css`
      font-family: ${fontFamily.body};
      font-size: 16px;
      font-weight: 500;
      line-height: 1.4;
    `,
  },

  nav: {
    xlarge: css`
      font-family: ${fontFamily.heading};
      font-size: 18px;
      font-weight: 400;
      line-height: 1.4;
    `,
    
    large: css`
      font-family: ${fontFamily.heading};
      font-size: 16px;
      font-weight: 400;
      line-height: 1.4;
    `,
    
    medium: css`
      font-family: ${fontFamily.heading};
      font-size: 14px;
      font-weight: 400;
      line-height: 1.4;
    `,

      small: css`
      font-family: ${fontFamily.heading};
      font-size: 12px;
      font-weight: 400;
      line-height: 1.4;
    `,
  },
} as const;