import { useEffect, useState } from "react";
import { fetchItem } from "../../services/productService";
import { handleSubmit } from "../../utils/form";
import { useProduct } from "../../context/ProductContext";
import { ProductType } from "../../schema";
import ProductForm from "../../components/ProductForm";

function EditProduct() {
    const { selectedProductId } = useProduct();
    const [formData, setFormData] = useState<ProductType>({
        name: '',
        image: '',
        price: 0,
        description: '',
    });

    useEffect(() => {
        const fetchData = async() => {
            try {
                const result = await fetchItem(selectedProductId);
                setFormData(result);
            }
            catch (error) {
                console.error("Error", error);
                alert('There was an error during retrieving item.');
            }
        };

        fetchData();
    }, [selectedProductId]);
    
    const path = `/products/${selectedProductId}`
    const URL = 'https://seruni-backend-production.up.railway.app' + path;
    
    const params = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    };

    return (
        <>
            <h1>Edit Product</h1>
            <ProductForm
                formData={formData}
                setFormData={setFormData}
                onSubmit={(e) => handleSubmit(e, URL, params)}
            />
        </>
    )
}

export default EditProduct;