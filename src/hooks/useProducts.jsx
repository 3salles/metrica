import { api } from 'services/api';

const { createContext, useState, useEffect, useContext } = require('react');

const ProductContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addNewProduct = async newProduct => {
    const response = await api.post('/product', newProduct);

    const { product } = response.data;
    setProducts({ ...products, product });
  };

  useEffect(() => {
    api.get('products').then(response => setProducts(response.data.products));
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, addNewProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);

  return context;
};
