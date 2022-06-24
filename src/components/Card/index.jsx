import { Avatar, Box, Typography } from '@mui/material';
import { Botao, CardResponsivo } from './styled';

function UserCard({ dados }) {
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
        <Botao variant="contained" size="small">
          Pagar
        </Botao>
      </Box>
    </CardResponsivo>
  );
}

export default UserCard;
