import { useState, useEffect } from "react";
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
    
    useEffect(() => {
        generateItems();
    }, [formData, formTags]);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetchItems({
            formTags: {},
            formData: formData
        });
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