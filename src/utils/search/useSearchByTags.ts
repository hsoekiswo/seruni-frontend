import { useState } from "react";

const useSearchByTags = () => {
    const [ formTags, setTags ] = useState({
        workshop: false,
        class: false,
        'learning-resources': false,
    });

    return {
        formTags,
        setTags,
    }
};

export default useSearchByTags;