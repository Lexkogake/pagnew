import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  IconButton,
  InputAdornment,
  MenuItem,
  Modal,
  Select,
  TextField
} from '@mui/material';
import { memo, useState } from 'react';

import { Botao } from '../Botao/styled';
import ModalInformativo from './ModalInformativo';

function ModalPagamento({ dados, close }) {
  const [valor, setValor] = useState('');
  const [escolha, setEscolha] = useState('');
  const [chamarModalInfo, setChamarModalInfo] = useState(false);
  const [closeModalPagamento, setCloseModalPagamento] = useState(true);
  const [envioDosDados, setEnvioDosDados] = useState(false);
  const [load, setLoad] = useState(false);

  const botaoPagar = () => {
    if (escolha == '1111111111111111') {
      efetuarPagamento();
    } else {
      setChamarModalInfo(!chamarModalInfo);
      setEnvioDosDados(false);
      setCloseModalPagamento(true);
    }
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

  const selectSelecionado = evento => {
    const cartaoSelecionado = evento.target.value;
    setEscolha(cartaoSelecionado);
  };

  const efetuarPagamento = () => {
    setLoad(true);

    const option = {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    };
    fetch(
      'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989',
      option
    )
      .then(retorno => retorno.json())
      .then(resultado => {
        setEnvioDosDados(resultado.success);
        setChamarModalInfo(!chamarModalInfo);
        setCloseModalPagamento(false);
      });
  };

  const moeda = evento => {
    let valor = evento.target.value;
    valor = valor.replace(/\D/g, '');
    valor = valor.replace(/(\d)(\d{2})$/, '$1,$2');
    valor = valor.replace(/(?=(\d{3})+(\D))\B/g, '.');

    setValor(valor);
  };

  return (
    <>
      {chamarModalInfo ? (
        <ModalInformativo closeInfo={botaoPagar} valido={envioDosDados} />
      ) : (
        <Modal open={closeModalPagamento} onClose={close}>
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
              title={`Pagamento para ${dados.name}`}
              sx={{
                textAlign: 'center',
                backgroundColor: '#474a6e',
                color: '#fff'
              }}
              action={
                <IconButton sx={{ color: '#fff' }} onClick={close}>
                  <CloseIcon />
                </IconButton>
              }
            />

            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: '30px'
              }}
            >
              <Box sx={{ width: '90%', marginX: 'auto', mb: '16px' }}>
                <TextField
                  value={valor}
                  onChange={moeda}
                  type="text"
                  size="small"
                  sx={{ width: '100%' }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {valor ? 'R$ ' : 'R$ 0 ,00'}
                      </InputAdornment>
                    )
                  }}
                  InputLabelProps={{ shrink: true }}
                />
              </Box>

              <Box sx={{ width: '90%', marginX: 'auto' }}>
                <Select
                  sx={{ width: '100%' }}
                  displayEmpty
                  value={escolha}
                  onChange={selectSelecionado}
                  size="small"
                  defaultValue=""
                >
                  <MenuItem value="" disabled>
                    <em>Selecione um cartão</em>
                  </MenuItem>

                  {cards.map((cartao, index) => {
                    return (
                      <MenuItem key={index} value={cartao.card_number}>
                        Cartão {cartao.card_number}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Box>

              <Botao
                type="submit"
                variant="contained"
                size="small"
                sx={{ width: '80px', mt: '16px', marginX: 'auto' }}
                onClick={botaoPagar}
                disabled={valor < 1 || escolha === ''}
              >
                {load ? <CircularProgress size={22} thickness={5} /> : 'Pagar'}
              </Botao>
            </CardContent>
          </Card>
        </Modal>
      )}
    </>
  );
}

export default memo(ModalPagamento);
