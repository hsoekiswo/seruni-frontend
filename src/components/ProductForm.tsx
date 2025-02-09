import { ProductFormType } from "../schema";
import { handleChange } from "../utils/form";

function ProductForm(
    { formData, setFormData, onSubmit }: ProductFormType
) {
    return (
        <form onSubmit={onSubmit}>
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
    )
}

export default ProductForm