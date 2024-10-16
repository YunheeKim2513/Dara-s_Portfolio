import { style } from '@vanilla-extract/css';

export const headerStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#333',
  color: '#fff',
  position: 'fixed',
  width: '100%',
  top: 0,
  left: 0,
  zIndex: 100,
});

export const logoStyle = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.5rem',
  fontWeight: 'bold',
});

export const logoImageStyle = style({
  marginRight: '10px',
});

export const menuButtonStyle = style({
  display: 'none',
  background: 'none',
  border: 'none',
  color: '#fff',
  fontSize: '1.5rem',
  cursor: 'pointer',

  '@media': {
    'screen and (max-width: 768px)': {
      display: 'block',
    },
  },
});
