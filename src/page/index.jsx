import { CircularProgress, Container } from '@mui/material';

import Api from '../api';
import UserCard from '../components/Card';
import { CardUtil } from './styled';

function PageUsers() {
  const { data, carregando, error } = Api(
    'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'
  );

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
      {data.map((resp, index) => {
        return <UserCard key={index} dados={resp} />;
      })}
    </Container>
  );
}

export default PageUsers;
