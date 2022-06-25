import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ModalPagamento from './components/Modal';

import PageUsers from './page';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    {/* <PageUsers /> */}
    <ModalPagamento />
  </React.StrictMode>
);
