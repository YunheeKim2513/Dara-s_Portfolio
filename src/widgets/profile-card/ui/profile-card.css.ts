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
  flexDirection: 'row',
  textAlign: 'left',
  alignItems: 'flex-start',
  maxWidth: '800px',
  padding: '2rem',
  border: '1px solid #eaeaea',
  borderRadius: '10px',

  '@media': {
    [commonStyles.breakpoints.mobile]: {
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
    },
  },
});

export const profileCardImageWrapper = style({
  marginRight: '2rem',
  marginBottom: 0,

  '@media': {
    [commonStyles.breakpoints.mobile]: {
      flexShrink: 0,
      marginBottom: '1rem',
    },
  },
});

export const profileCardContent = style({
  textAlign: 'left',
  width: '100%',
});

export const profileCardName = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
});

export const profileCardTitle = style({
  color: '#0070f3',
  fontSize: '1.25rem',
  marginBottom: '1rem',
});
