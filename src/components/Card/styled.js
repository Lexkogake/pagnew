import { Card, styled } from '@mui/material';

export const CardResponsivo = styled(Card)({
  background: 'linear-gradient(360deg, #252637, #373957)',
  '@media(max-width:760px)': {
    flexDirection: 'column'
  }
});
