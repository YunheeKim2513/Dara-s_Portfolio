import { style } from '@vanilla-extract/css';
import * as commonStyles from '@/shared/ui/common.css';

export const profileCardSection = style({
  marginBottom: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '1rem',
});

export const profileCardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: '800px',
  padding: '2rem',
  border: '1px solid #eaeaea',
  borderRadius: '10px',

  '@media': {
    [commonStyles.breakpoints.mobile]: {
      flexDirection: 'row',
      textAlign: 'left',
    },
  },
});

export const profileCardImageWrapper = style({
  flexShrink: 0,
  marginBottom: '1rem',

  '@media': {
    [commonStyles.breakpoints.mobile]: {
      marginRight: '2rem',
      marginBottom: 0,
    },
  },
});
