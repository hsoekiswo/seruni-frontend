import { useState } from "react";
import { ProductType } from "../../schema";
import ProductForm from "../../components/ProductForm";
import { handleSubmit } from "../../utils/form";
import { BackNav } from "../../components/Nav";
import Title from "../../components/Title";


function InputProduct() {
    const [formData, setFormData] = useState<ProductType>({
        name: '',
        image: '',
        price: 0,
        description: '',
        tags: '',
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
            <div className="pt-20">
                <Title title="New Product"/>
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

export default InputProduct;