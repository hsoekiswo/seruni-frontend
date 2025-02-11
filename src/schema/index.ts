export interface ProductType {
    name: string;
    image: string;
    price: number;
    description: string;
}

export interface ProductFormType {
    formData: ProductType;
    setFormData: React.Dispatch<React.SetStateAction<ProductType>>;
    onSubmit: (e: React.FormEvent) => void;
}

export interface ItemProps {
    id: string;
    name: string;
    image: string;
    price: number;
    onClick: () => void;
}

export interface EventChangeProps {
    target: {
        name: string;
        value: string | number;
    }
}

export interface SearchType {
    keyword: string;
}

export interface SearchFormType {
    formData: SearchType,
    setFormData: React.Dispatch<React.SetStateAction<SearchType>>;
    onSubmit: (e: React.FormEvent) => void;
}