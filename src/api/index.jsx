import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'
});

export default Api;
