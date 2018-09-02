/* @flow */
import { css } from 'react-emotion';

export const colors = {
  blue: '#00bcd4',
  black: '#242729',
  white: '#ffffff',
  grey: '#f5f5f5',
};

export const fontSizes = {
  small: 12,
  regular: 14,
  large: 18,
};

export const spacing = {
  unit: 6,
  internal: 12,
  external: 16,
  breath: 24,
  break: 36,
};

export const theme = {
  primaryColor: colors.blue,
  borderColor: colors.grey,
  fontFamily: '"Segoe UI", Helvetica, Arial, sans-serif',
  fontSize: fontSizes.regular,
  textColor: colors.black,
};

export const verticalScroll = css`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 40px;
  }
  &::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }
  &::-webkit-scrollbar-thumb:vertical {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 40px;
    background-clip: padding-box;
    border: 2px solid rgba(0, 0, 0, 0);
    min-height: 10px;
  }
  &::-webkit-scrollbar-thumb:vertical:active {
    background-color: rgba(0, 0, 0, 0.61);
  }
`;
