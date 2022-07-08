import { CircularProgress, Container } from '@mui/material';
import { useEffect, useState } from 'react';

import Api from '../api';
import UserCard from '../components/Card';
import { CardUtil } from './styled';

function PageUsers() {
  const [data, setData] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [error, setError] = useState(null);

  //usando outro metodo para praticar, verificar mais sobre...
  useEffect(() => {
    Api.get()
      .then(({ data }) => {
        setData(data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  function falha(error) {
    if (error) {
      return <CardUtil>Falha ao carregar dados</CardUtil>;
    }
  }

  return (
    <Container maxWidth="md">
      {falha(error)}
      {carregando && (
        <CardUtil>
          Carregando...
          <CircularProgress size={24} thickness={5} />
        </CardUtil>
      )}
      {data.map(resp => {
        return <UserCard key={String(resp.id)} dados={resp} />;
      })}
    </Container>
  );
}

export default PageUsers;
