import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App.tsx';
import Login from '@pages/login/Login.tsx';
import Registration from '@pages/registration/Registration.tsx';
import Store from '@pages/store/Store.tsx';
import Product from '@pages/store/Product.tsx';
import Checkout from '@pages/store/Checkout.tsx';
import Blog from '@pages/blog/Blog.tsx';
import MyAccount from '@pages/account/Account.tsx';
import Purchases from '@pages/account/Purchases.tsx';
import AccountStore from '@pages/account/store/AccountStore.tsx';
import DetailedAccount from '@pages/account/DetailedAccount.tsx';
import EditProduct from '@pages/account/store/EditProduct.tsx';
import InputProduct from '@pages/account/store/InputProduct.tsx';
import { ProductProvider } from '@context/ProductContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/store" element={<Store />} />
          <Route path='/product/new' element={<InputProduct />} />
          <Route path="/product/edit/:id" element={<EditProduct />} />
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
