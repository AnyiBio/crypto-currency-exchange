import { css } from '@emotion/css';
import { theme } from 'core/theme';

export const coin = css`
  margin: ${theme.spacing(1.5)} 0;
`;

export const coinBar = css`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(1.5)};

  ${theme.breakpoints.up('md')} {
    flex-direction: row;
  }
`;

export const menuText = css`
  margin: 0 ${theme.spacing(1.5)};
`;
