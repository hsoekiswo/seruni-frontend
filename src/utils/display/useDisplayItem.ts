import { useState, useEffect } from "react";
import { ItemType } from "@schema/index";
import { fetchItem } from "@services/productService";

const useDisplayItem = (id) => {
    const [data, setData] = useState<Omit<ItemType, 'id'>>({
        name: '',
        image: '',
        price: 0,
        description: '',
        tags: '',
    });

    useEffect(() => {
        if (id) {
            (async () => {
                const result = await fetchItem(id);
                setData(result);
            })();
        }
    }, [id]);

    return data;
};

export default useDisplayItem