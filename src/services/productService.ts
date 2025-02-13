const URL = 'https://seruni-backend-production.up.railway.app';

export const fetchItem = async(id: string) => {
    try {
        const path = '/products'
        const response = await fetch(`${URL}${path}/${id}`);
        const data = await response.json();
        return data;
    } catch(error) {
        console.error("Error fetching product:", error);
        throw error;
    }
}
            
import { FetchItemsType } from "@schema/index";

export const fetchItems = async({
    formTags = {},
    formData = {},
}: FetchItemsType = {})  => {
    const path = '/products'
    let URL = `https://seruni-backend-production.up.railway.app${path}`;
    // Convert to uppercase
    const selectedTags = Object.keys(formTags)
        .filter(tag => formTags[tag])
        .map(tag =>
        tag
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
    );
    if (formData['keyword']) {
        URL += `?search=${formData['keyword']}`;
        if (selectedTags.length > 0) {
        URL += `&tags=${selectedTags.join(',')}`;
        }
    } else {
        if (selectedTags.length > 0) {
        URL += `?tags=${selectedTags.join(',')}`;
        }
    }

    try {
        const response = await fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
};