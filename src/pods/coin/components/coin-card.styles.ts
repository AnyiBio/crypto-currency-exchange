import { css } from '@emotion/css';
import { theme } from 'core/theme';

export const typographyCard = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const success = css`
  color: ${theme.palette.success.main};
`;

export const danger = css`
  color: ${theme.palette.error.main};
`;