import { useState } from "react";
import { SearchType, SearchTagsType } from "@schema/index";

const useSearchItems = () => {
    const [ formData, setFormData ] = useState<SearchType>({
        keyword: ''
    });

    const toggleClick = (
        e: React.MouseEvent,
        setFormData: React.Dispatch<React.SetStateAction<SearchTagsType>>,
    ) => {
        e.preventDefault();

        const name = e.target['dataset'].name;
        
        setFormData((prev) => ({
            ...prev,
            [name]: !prev[name]
        }))
    };

    return {
        formData,
        setFormData,
        toggleClick
    };
};

export default useSearchItems;