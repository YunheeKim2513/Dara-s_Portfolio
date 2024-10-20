import { style } from '@vanilla-extract/css';

export const footerStyle = style({
  padding: '20px',
  backgroundColor: '#222',
  color: '#fff',
  textAlign: 'center',
  width: '100%',
  position: 'fixed',
  bottom: 0,
  left: 0,
});

export const footerContentStyle = style({
  maxWidth: '800px',
  margin: '0 auto',
});
