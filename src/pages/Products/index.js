import { createColumnHelper } from '@tanstack/react-table';
import Header from 'components/Header';
import Table from 'components/Table';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from 'services/firebase-config';
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
    cell: info =>
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(info.getValue()),
  }),
];

export default function Products() {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, 'products');

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map(doc => ({ ...doc.data() })));
    };

    getProducts();
  }, [productsCollectionRef]);

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
