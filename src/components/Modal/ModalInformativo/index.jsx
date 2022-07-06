import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Modal,
  Typography
} from '@mui/material';

import { Botao } from '../../Botao/styled';

function ModalInformativo({ closeInfo, valido }) {
  return (
    <Modal open={true} onClose={closeInfo}>
      <Card
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '340px',
          width: '40%',
          boxShadow: '0 0 12px 0 rgba(0,0,0,0.4)'
        }}
      >
        <CardHeader
          title="Recibo de pagamento"
          sx={{
            textAlign: 'center',
            backgroundColor: '#474a6e',
            color: '#fff'
          }}
        />

        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '30px'
          }}
        >
          <Box sx={{ width: '90%', marginX: 'auto', mb: '16px' }}>
            <Typography component="p" variant="body1" sx={{ color: '#000' }}>
              {valido
                ? 'O pagamento foi concluido com sucesso'
                : 'O pagamento não foi concluido com sucesso'}
            </Typography>
          </Box>

          <Botao
            variant="contained"
            size="small"
            sx={{ width: '80px', mt: '16px', marginX: 'auto' }}
            onClick={closeInfo}
          >
            Fechar
          </Botao>
        </CardContent>
      </Card>
    </Modal>
  );
}

export default ModalInformativo;
