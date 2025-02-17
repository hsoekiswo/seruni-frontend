import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductForm from "@components/product/ProductForm";
import { BackNav } from "@components/shared/Nav";
import Title from "@components/shared/Title";
import { fetchItem } from "@services/productService";
import { ItemType } from "@schema/index";
import { handleSubmit } from "@utils/form/formUtils";

function EditProduct() {
    const { id } = useParams();
    const [formData, setFormData] = useState<Omit<ItemType, 'id'>>({
        name: '',
        image: '',
        price: 0,
        description: '',
        tags: '',
    });

    useEffect(() => {
        const fetchData = async() => {
            try {
                const result = await fetchItem(id);
                setFormData(result);
            }
            catch (error) {
                console.error("Error", error);
                alert('There was an error during retrieving item.');
            }
        };

        fetchData();
    }, [id]);
    
    const path = `/products/${id}`
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