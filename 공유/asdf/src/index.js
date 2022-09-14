import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { AppProvider } from "./context/test";
import { AuthContextProvider } from "./context/auth-context";

ReactDOM.render(
  <AuthContextProvider>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <AppProvider>
            <App />
          </AppProvider>
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </AuthContextProvider>,

  document.getElementById("root")
);
