export interface ItemType {
    name: string;
    image: string;
    description: string;
    price: number;
    tags: string;
}

export interface SearchType {
    keyword: string;
}

export interface SearchFormType {
    formData: SearchType,
    setFormData: React.Dispatch<React.SetStateAction<SearchType>>;
    onSubmit: (e: React.FormEvent) => void;
}