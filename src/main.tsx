import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx';
import Login from './routes/Login/Login.tsx';
import Registration from './routes/Registration/Registration.tsx';
import Store from './routes/Store/Store.tsx';
import Product from './routes/Product/Product.tsx';
import Checkout from './routes/Checkout/Checkout.tsx';
import Blog from './routes/Blog/Blog.tsx';
import MyAccount from './routes/MyAccount/MyAccount.tsx';
import { ProductProvider } from './context/ProductContext.tsx';
import Purchases from './routes/MyAccount/Purchases.tsx';
import AccountStore from './routes/MyAccount/AccountStore.tsx';
import DetailedAccount from './routes/MyAccount/DetailedAccount.tsx';
import EditProduct from './routes/Product/EditProduct.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/edit" element={<EditProduct />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/my-account" element={<MyAccount />}>
            <Route path="" element={<Purchases />} /> 
            <Route path="account-store" element={<AccountStore />} />/
            <Route path="detailed-account" element={<DetailedAccount />} />
          </Route>
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>,
)
