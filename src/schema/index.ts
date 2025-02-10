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

export interface EventChangeProps {
    target: {
        name: string;
        value: string | number;
    }
}