import { useState, useEffect } from "react";
import { useProduct } from "@context/ProductContext";
import { ItemType } from "@schema/index";
import { fetchItem } from "@services/productService";

const useDisplayItem = () => {
    const { selectedProductId } = useProduct();
    const [data, setData] = useState<Omit<ItemType, 'id'>>({
        name: '',
        image: '',
        price: 0,
        description: '',
        tags: '',
    });

    useEffect(() => {
        (async () => {
            const result = await fetchItem(selectedProductId);
            setData(result);
        })();
    }, [selectedProductId]);

    return data;
};

export default useDisplayItem