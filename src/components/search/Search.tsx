import { handleChange } from "@utils/form/formUtils";
import { SearchType } from "@schema/index";

interface SearchFormProps {
    formData: SearchType,
    setFormData: React.Dispatch<React.SetStateAction<SearchType>>;
    onSubmit: (e: React.FormEvent) => void;
}

function Search(
    { formData, setFormData, onSubmit }: SearchFormProps
) {
    return (
        <form onSubmit={onSubmit}>
            <div className="flex">
            <div className="w-full mr-4">
                <label>
                <input
                    type="text"
                    id='keyword'
                    name='keyword'
                    placeholder="Search"
                    className="form-input"
                    onChange={(e) => {handleChange(e, setFormData, formData)}}
                    >
                </input>
                </label>
            </div>
            <div className="flex items-center justify-center md:w-2/12">
                <button type="submit" className="w-full bg-slate-500 text-white font-bold p-2 rounded-lg">
                Search
                </button>
            </div>
            </div>
        </form>
    )
}

export default Search;