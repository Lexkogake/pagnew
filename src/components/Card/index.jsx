import { Avatar, Box, Typography } from '@mui/material';
import { CardResponsivo } from './styled';
import { Botao } from '../Botao/styled';
import ModalPagamento from '../Modal';
import { useState } from 'react';

function UserCard({ dados }) {
  const [chamarModal, setChamarModal] = useState(false);

  return (
    <CardResponsivo
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 3,
        px: 6,
        mt: 1
      }}
    >
      <Avatar
        sx={{ width: '100px', height: '100px', mr: 2 }}
        src={dados.img}
        alt="foto do perfil"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
      >
        <Typography component="span" variant="body1" sx={{ color: '#fff' }}>
          {dados.name}
        </Typography>
        <Typography component="span" variant="body1" sx={{ color: '#fff' }}>
          id:{dados.id} - Username: {dados.username}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <Botao
          onClick={() => setChamarModal(true)}
          variant="contained"
          size="small"
        >
          {chamarModal ? <ModalPagamento /> : 'Pagar'}
        </Botao>
      </Box>
    </CardResponsivo>
  );
}

export default UserCard;
