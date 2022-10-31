import App from 'App';
import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css';

createServer({
  models: {
    products: Model,
  },

  seeds(server) {
    server.db.loadData({
      products: [
        {
          id: '001P',
          name: 'Jogo de Ferramentas Titanium 5456 com 200 Peças e Maleta',
          stock: 200,
          price: 129,
        },
        {
          id: '002P',
          name: 'Tramontina 41001108, Alicate Universal 8pol, Amarelo',
          stock: 400,
          price: 25.9,
        },
        {
          id: '003P',
          name: 'Kit de Pontas e Brocas Bosch V-Line 41 pçs',
          stock: 100,
          price: 89,
        },
        {
          id: '004P',
          name:
            'Parafusadeira Furadeira Bosch GSR 1000 Smart 12V com 1 bateria,',
          stock: 50,
          price: 289,
        },
        {
          id: '005P',
          name: 'Serra Tico-Tico Bosch GST 650 450W 127V com 1 lâmina',
          stock: 200,
          price: 272.97,
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/products', () => {
      return this.schema.all('products');
    });

    this.post('/product', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('products', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
