import Header from 'components/Header';
import Table from 'components/Table';
import Navbar from './components/Navbar';

import './styles.css';

export default function Products() {
  return (
    <section>
      <Navbar />
      <article className="products-container">
        <Header />
        <div className="table-container">
          <h2>Produtos</h2>
          <Table />
        </div>
      </article>
    </section>
  );
}
