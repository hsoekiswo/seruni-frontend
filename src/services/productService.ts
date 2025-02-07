const URL = 'https://seruni-backend-production.up.railway.app';

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