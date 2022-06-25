import {
  Box,
  Card,
  CardContent,
  CardHeader,
  MenuItem,
  Modal,
  Select,
  TextField
} from '@mui/material';
import { useState } from 'react';

import { Botao } from '../Botao/styled';

function ModalPagamento() {
  const [open, setOpen] = useState(false);
  const [escolha, setEscolha] = useState('');

  const openClick = () => {
    setOpen(true);
  };
  const closeClick = () => {
    setOpen(false);
    setEscolha('');
  };

  let cards = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18'
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20'
    }
  ];

  const selecionado = e => {
    setEscolha(e.target.value);
  };

  const efetuandoPagamento = () => {
    return true;
  };

  return (
    <>
      <button onClick={openClick}>abrir</button>
      <Modal open={open} onClose={closeClick}>
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
            title="Pagamento para Nome do usuario"
            sx={{
              textAlign: 'center',
              backgroundColor: '#474a6e',
              color: '#fff'
            }}
          />
          <CardContent
            sx={{ display: 'flex', flexDirection: 'column', padding: '30px' }}
          >
            <Box sx={{ width: '90%', marginX: 'auto', mb: '16px' }}>
              <TextField type="text" sx={{ width: '100%' }} />
            </Box>

            <Box sx={{ width: '90%', marginX: 'auto' }}>
              <Select
                sx={{ width: '100%' }}
                displayEmpty
                value={escolha}
                onChange={selecionado}
              >
                <MenuItem disabled>
                  <em>Selecione um cartão</em>
                </MenuItem>
                {cards.map((cartao, index) => {
                  return (
                    <MenuItem key={index} value={cartao.card_number}>
                      Cartao {cartao.card_number}
                    </MenuItem>
                  );
                })}
              </Select>
            </Box>

            <Botao
              variant="contained"
              size="small"
              sx={{ width: '80px', mt: '16px', marginX: 'auto' }}
            >
              Pagar
            </Botao>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
}

export default ModalPagamento;
