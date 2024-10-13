import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f5f5f5',
  color: '#333',
});

globalStyle('*', {
  boxSizing: 'inherit',
});
