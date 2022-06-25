import axios from 'axios';
import { useEffect, useState } from 'react';

function Api(url) {
  const [data, setData] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  return { data, carregando, error };
}

export default Api;
