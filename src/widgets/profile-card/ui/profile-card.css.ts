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
  fontSize: '2.75rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
});

export const profileCardTitle = style({
  color: '#8892a0',
  fontSize: '1.4rem',
  fontWeight: '400',
  marginBottom: '1rem',
});

export const profileCardDetails = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  fontSize: '1.4rem',
  fontWeight: '400',
  color: '#333', // 텍스트의 기본 색상
  lineHeight: '1.6', // 읽기 쉽게 하기 위한 줄 간격
  '@media': {
    [commonStyles.breakpoints.mobile]: {
      fontSize: '1.1rem', // 데스크탑 환경에서 더 크게 보여줌
    },
  },
});
