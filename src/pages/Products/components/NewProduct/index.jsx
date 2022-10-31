import { useProducts } from 'hooks/useProducts';
import { useEffect } from 'react';
import { useState } from 'react';
import { currencyFormatter, currencyParser } from 'utils/currency';
import './styles.css';

export default function NewProduct() {
  const { addNewProduct } = useProducts();

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [disableButton, setDisableButton] = useState(true);

  const handleOnChangeId = evt => {
    const { value } = evt?.target;
    setId(value);
  };

  const handleOnChangeName = evt => {
    const { value } = evt?.target;
    setName(value);
  };

  const handleOnChangeStock = evt => {
    const { value } = evt?.target;
    setStock(value);
  };

  const handleOnChangePrice = evt => {
    const { value } = evt?.target;
    setPrice(currencyParser(value));
  };

  const resetInputs = () => {
    setId(0);
    setName('');
    setStock(0);
    setPrice(0);
    setDisableButton(true);
  };

  const onAddNewProduct = evt => {
    evt.preventDefault();

    const product = {
      id: id,
      name: name,
      stock: Number(stock),
      price: price,
    };

    addNewProduct(product);

    resetInputs();
  };

  useEffect(() => {
    if (id !== '' && name !== '' && price !== 0) {
      setDisableButton(false);
    }
  }, [id, name, price]);

  return (
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
            value={id}
            onChange={handleOnChangeId}
          />
        </label>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome do produto"
            value={name}
            onChange={handleOnChangeName}
          />
        </label>
        <label htmlFor="stock">
          Estoque
          <input
            type="text"
            name="stock"
            id="stock"
            placeholder="Quantidade do produto"
            value={stock}
            onChange={handleOnChangeStock}
          />
        </label>
        <label htmlFor="price">
          Preço
          <input
            type="text"
            name="price"
            id="price"
            placeholder="R$ 0,00"
            value={currencyFormatter(price)}
            onChange={handleOnChangePrice}
          />
        </label>
        <footer>
          <button
            type="submit"
            className="add-button"
            disabled={disableButton}
            onClick={onAddNewProduct}>
            Adicionar
          </button>
        </footer>
      </form>
    </div>
  );
}
