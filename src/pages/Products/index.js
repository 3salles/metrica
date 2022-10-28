import { createColumnHelper } from '@tanstack/react-table';
import Header from 'components/Header';
import Table from 'components/Table';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from 'services/firebase-config';
import Navbar from './components/Navbar';

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
