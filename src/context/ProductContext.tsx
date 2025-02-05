import { createContext, useContext, useState } from "react";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
    const [selectedProductId, setSelectedProductId] = useState(null);

    return (
        <ProductContext.Provider value={{ selectedProductId, setSelectedProductId }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => useContext(ProductContext);