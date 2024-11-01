import { style } from '@vanilla-extract/css';
import * as commonStyles from '@/shared/ui/common.css';

export const portfolioGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  paddingTop: '2rem',
  '@media': {
    [commonStyles.breakpoints.mobile]: {
      gridTemplateColumns: '1fr',
    },
  },
});
