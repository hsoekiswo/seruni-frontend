import { SearchTagsType } from "@schema/index";

interface SearchTagsProps {
    toggleClick: (
        e: React.MouseEvent,
        setFormData: React.Dispatch<React.SetStateAction<SearchTagsType>>,
    ) => void,
    setFormData: React.Dispatch<React.SetStateAction<SearchTagsType>>
    formData: SearchTagsType,
    onTagsClick: (e: React.FormEvent) => void;
}

function CheckTags({ toggleClick, formData, setFormData, onTagsClick }: SearchTagsProps) {
    return (
        <form>
            <div className="flex flex-row">
                {["workshop", "class", "learning-resources"].map((tag) => (
                <div key={tag}>
                    <input type="checkbox" id={tag} name={tag} checked={formData[tag]} hidden readOnly />
                    <label htmlFor={tag} className="form-label inline">
                    <button
                        type="button"
                        className={`mr-3 px-2 py-1 border rounded-full ${(formData[tag]) ? "bg-custom-violet text-white" : ""}`}
                        data-name={tag} // Set name in dataset
                        onClick={(e) => {
                            toggleClick(e, setFormData);
                            onTagsClick(e);
                        }}
                    >
                        {tag.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </button>
                    </label>
                </div>
                ))}
            </div>
        </form>
    )
};

export default CheckTags;