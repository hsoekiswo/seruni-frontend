import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ItemType } from "@schema/index";
import useSearchItems from "@utils/search/useSearchItems";
import useSearchByTags from "@utils/search/useSearchByTags";
import { fetchItems } from "@services/productService";

const useDisplayItems = () => {
    const {
        formData,
        setFormData,
        toggleClick,
    } = useSearchItems();

    const {
        formTags,
        setTags,
    } = useSearchByTags();

    const [items, setItems] = useState<ItemType[]>([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    
    const generateItems = async() => {
        try {
            const result = await fetchItems({
                formTags: formTags,
                formData: formData,
            });
            setItems(result);
        } catch (error) {
            console.error('Error fetching items', error);
        } finally{
            setLoading(false);
        }
    }

    const updateURL = () => {
        const selectedTags = Object.keys(formTags)
            .filter((tag) => formTags[tag])
            .join(",");
    
        const params = new URLSearchParams();
        if (formData.keyword) params.append("q", formData.keyword);
        if (selectedTags) params.append("tags", selectedTags);
    
        navigate(`/products?${params.toString()}`);
    };
    
    useEffect(() => {
        generateItems();
        updateURL();
    }, [formTags]);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        generateItems();
        updateURL();
    };

    return ({
        items,
        refreshItems: generateItems,
        loading,
        formData,
        setFormData,
        formTags,
        setTags,
        handleSearchSubmit,
        toggleClick,
    })
};

export default useDisplayItems;