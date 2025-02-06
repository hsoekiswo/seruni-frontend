import { createContext, useContext, useState, ReactNode } from "react";

interface ProductContextType {
    selectedProductId: string | null;
    setSelectedProductId: (id: string | null) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
    children: ReactNode;
  }

export const ProductProvider = ({ children }: ProductProviderProps) => {
    const [selectedProductId, setSelectedProductId] = useState(null);

    return (
        <ProductContext.Provider value={{ selectedProductId, setSelectedProductId }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error('useProduct must be used within a ProductProvider');
    }
    return context;
};