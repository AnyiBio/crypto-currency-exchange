import { css } from '@emotion/css';
import { theme } from 'core/theme';

export const success = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${theme.palette.success.main};
`;

export const danger = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${theme.palette.error.main};
`;