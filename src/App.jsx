import { ProductsProvider } from 'hooks/useProducts';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'routes';

export default function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <AppRoutes />
      </ProductsProvider>
    </BrowserRouter>
  );
}
