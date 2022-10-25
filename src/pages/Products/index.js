import { createColumnHelper } from '@tanstack/react-table';
import Header from 'components/Header';
import Table from 'components/Table';
import Navbar from './components/Navbar';

import './styles.css';

const productsData = [
  {
    id: 'prod_001',
    name: 'Furadeira de Impacto a bateria Bosch GSB 12V-30, 12V SB',
    stock: 400,
    price: 400,
  },
  {
    id: 'prod_002',
    name: 'Kit de Pontas e Brocas Bosch X-Line 33 pçs',
    stock: 200,
    price: 65,
  },
  {
    id: 'prod_003',
    name: 'Parafusadeira e furadeira Bosch GSR 7-14 E 400W 127V ',
    stock: 400,
    price: 200,
  },
  {
    id: 'prod_004',
    name: 'Vonder Vd 6002 - Caixa Plástica, Preta',
    stock: 0,
    price: 20,
  },
  {
    id: 'prod_005',
    name: 'Tramontina 41001108, Alicate Universal 8 pol, Amarelo',
    stock: 30,
    price: 25,
  },
  {
    id: 'prod_006',
    name: 'Maleta de ferramentas kit com 129 peças 13564 Sparta',
    stock: 400,
    price: 99,
  },
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: 'Nome',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('stock', {
    header: 'Estoque',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('price', {
    header: 'Preço',
    cell: info =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(info.getValue()),
  }),
];

export default function Products() {
  return (
    <section>
      <Navbar />
      <article className="products-container">
        <Header />
        <div className="content">
          <div className="table-container">
            <h2>Produtos</h2>
            <Table columns={columns} data={productsData} />
          </div>
          <div className="new-products-container">
            <h3>Novo produto</h3>
            <form action="new-product" className="new-product-form">
              <label htmlFor="id">
                ID
                <input
                  type="text"
                  name="id"
                  id="id"
                  placeholder="ID do produto"
                />
              </label>
              <label htmlFor="name">
                Nome
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome do produto"
                />
              </label>
              <label htmlFor="stock">
                Estoque
                <input
                  type="text"
                  name="stock"
                  id="stock"
                  placeholder="Quantidade do produto"
                />
              </label>
              <label htmlFor="price">
                Preço
                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="R$ 0,00"
                />
              </label>
              <footer>
                <button
                  type="submit"
                  className="add-button"
                  onClick={evt => {
                    evt.preventDefault();
                    console.log('Add');
                  }}>
                  Adicionar
                </button>
              </footer>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
}
