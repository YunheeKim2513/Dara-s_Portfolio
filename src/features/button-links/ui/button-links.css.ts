import { style } from '@vanilla-extract/css';

export const linkButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
  color: '#fff',

  ':hover': {
    transform: 'scale(1.05)',
  },
  ':active': {
    transform: 'scale(0.95)',
  },
});

export const baseButton = style({
  backgroundColor: '#1877F2',
  ':hover': {
    backgroundColor: '#0e5fc4',
  },
});

export const githubButton = style({
  backgroundColor: '#333',
  ':hover': {
    backgroundColor: '#24292e',
  },
});
