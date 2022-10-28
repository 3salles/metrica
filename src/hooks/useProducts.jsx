import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from 'services/firebase-config';

const { createContext, useState, useEffect, useContext } = require('react');

const ProductContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, 'products');

  const addNewProduct = async product => {
    await addDoc(productsCollectionRef, { ...product });
  };

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map(doc => ({ ...doc.data() })));
    };

    getProducts();
  }, [productsCollectionRef]);

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
