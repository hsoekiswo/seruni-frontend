export interface ItemType {
    id: string;
    name: string;
    image: string;
    description: string;
    price: number;
    tags: string;
}

export interface SearchType {
    keyword?: string;
}

export interface SearchTagsType {
    workshop: boolean;
    class: boolean;
    'learning-resources': boolean;
}

export interface FetchItemsType {
    formTags?: {
        workshop: boolean,
        class: boolean,
        'learning-resources': boolean,
    } | object;
    formData?: {
        keyword?: string
    };
}