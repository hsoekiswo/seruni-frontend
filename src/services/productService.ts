const URL = 'https://seruni-backend-production.up.railway.app';

export const fetchItem = async(id: string) => {
    try {
        const response = await fetch(`${URL}/products/${id}`);
        const data = await response.json();
        return data;
    } catch(error) {
        console.error("Error fetching product:", error);
        throw error;
    }
}

export const fetchItems = async() => {
    try {
        const response = await fetch(`${URL}/products`);
        const data = await response.json();
        return data;
    } catch(error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}