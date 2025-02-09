import { useState } from "react";
import { ProductType } from "../../schema";
import ProductForm from "../../components/ProductForm";
import { handleSubmit } from "../../utils/form";
import { BackNav } from "../../components/Nav";


function InputProduct() {
    const [formData, setFormData] = useState<ProductType>({
        name: '',
        image: '',
        price: 0,
        description: '',
    });

    const path = '/products'
    const URL = 'https://seruni-backend-production.up.railway.app' + path;

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    };

    return (
        <>
            <BackNav />
            <h1>New Product</h1>
            <ProductForm
                formData={formData}
                setFormData={setFormData}
                onSubmit={(e) => handleSubmit(e, URL, params)}
            />
        </>
    )
}

export default InputProduct;