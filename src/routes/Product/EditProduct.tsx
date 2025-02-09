import { fetchItem } from "../../services/productService";

const data = await fetchItem('1');

function EditProduct() {
    return (
        <>
            <h1>Edit Product</h1>
            <form>
                <label>
                    Name
                </label>
                <input
                    type='text'
                    className="form-input"
                    value={data.name}
                >
                </input>
                <label>
                    Image URL
                </label>
                <input
                    type='text'
                    className="form-input"
                    value={data.image}
                >
                </input>
                <label>
                    Description
                </label>
                <textarea
                    className="form-input h-48"
                    value={data.description}
                >    
                </textarea>
                <label>
                    Price
                </label>
                <input
                    type='text'
                    className="form-input"
                    value={data.price}
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