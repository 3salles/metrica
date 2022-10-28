import './styles.css';

export default function NewProduct() {
  return (
    <div className="new-products-container">
      <h3>Novo produto</h3>
      <form action="new-product" className="new-product-form">
        <label htmlFor="id">
          ID
          <input type="text" name="id" id="id" placeholder="ID do produto" />
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
          <input type="text" name="price" id="price" placeholder="R$ 0,00" />
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
  );
}
