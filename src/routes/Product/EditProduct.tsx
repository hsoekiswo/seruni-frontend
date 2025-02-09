import { useEffect, useState } from "react";
import { fetchItem } from "../../services/productService";
import { handleSubmit } from "../../utils/form";
import { useProduct } from "../../context/ProductContext";
import { ProductType } from "../../schema";
import ProductForm from "../../components/ProductForm";
import { BackNav } from "../../components/Nav";
import Title from "../../components/Title";

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
            <BackNav />
            <div className="pt-20">
                <Title title="Edit Product"/>
                <div className="account-generic-container">
                    <div className="w-3/4 min-h-32 min-h-1/5 max-h-fit border m-10 p-6 rounded-lg">
                        <ProductForm
                            formData={formData}
                            setFormData={setFormData}
                            onSubmit={(e) => handleSubmit(e, URL, params)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProduct;