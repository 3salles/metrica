import { createColumnHelper } from '@tanstack/react-table';
import Header from 'components/Header';
import Table from 'components/Table';
import { useProducts } from 'hooks/useProducts';
import { currencyFormatter } from 'utils/currency';

import Navbar from './components/Navbar';
import NewProduct from './components/NewProduct';

import './styles.css';

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
    cell: info => currencyFormatter(info.getValue()),
  }),
];

export default function Products() {
  const { products } = useProducts();

  return (
    <section>
      <Navbar />
      <article className="products-container">
        <Header />
        <div className="content">
          <div className="table-container">
            <h2>Produtos</h2>
            <Table columns={columns} data={products} />
          </div>
          <NewProduct />
        </div>
      </article>
    </section>
  );
}
