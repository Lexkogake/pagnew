import { Button, Card, styled } from '@mui/material';

export const Botao = styled(Button)({
  color: '#000',
  backgroundColor: '#f0f0f0',
  '&:hover': {
    backgroundColor: '#d5d5d5'
  },
  '@media(max-width:760px)': {
    width: '100%',
    marginTop: '8px'
  }
});

export const CardResponsivo = styled(Card)({
  background: 'linear-gradient(360deg, #252637, #373957)',
  '@media(max-width:760px)': {
    flexDirection: 'column'
  }
});
