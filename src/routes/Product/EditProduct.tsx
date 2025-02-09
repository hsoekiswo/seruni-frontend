import { useEffect, useState } from "react";
import { fetchItem } from "../../services/productService";
import { handleChange, handleSubmit } from "../../utils/form";
import { useProduct } from "../../context/ProductContext";

interface ProductType {
    name: string;
    image: string;
    price: number;
    description: string;
}

function EditProduct() {
    const { selectedProductId } = useProduct();
    // const [data, setData] = useState<ProductType>({
    //     name: '',
    //     image: '',
    //     price: 0,
    //     description: '',
    // });
    // const [formData, setFormData] = useState({
    //     name: data.name,
    //     image: data.image,
    //     description: data.description,
    //     price: data.price
    // });
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
            <form onSubmit={(e) => handleSubmit(e, URL, params)}>
                <label>
                    Name
                </label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => {handleChange(e, setFormData, formData)}}
                >
                </input>
                <label>
                    Image URL
                </label>
                <input
                    type='text'
                    id='image'
                    name='image'
                    className="form-input"
                    value={formData.image}
                    onChange={(e) => {handleChange(e, setFormData, formData)}}
                >
                </input>
                <label>
                    Description
                </label>
                <textarea
                    className="form-input h-48"
                    id='description'
                    name='description'
                    value={formData.description}
                    onChange={(e) => {handleChange(e, setFormData, formData)}}
                >    
                </textarea>
                <label>
                    Price
                </label>
                <input
                    type='text'
                    className="form-input"
                    id='price'
                    name='price'
                    value={formData.price}
                    onChange={(e) => {handleChange(e, setFormData, formData)}}
                >
                </input>
                <button
                    type="submit"
                    className="border my-2 p-2 bg-slate-400 text-white font-bold"
                >
                    Submit
                </button>
            </form>
        </>
    )
}

export default EditProduct;