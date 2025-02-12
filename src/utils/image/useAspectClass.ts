import { useState } from "react";

export function useAspectClass() {
    const [aspectClass, setAspectClass] = useState("");

    const handleImageLoad = (
        event: React.SyntheticEvent<HTMLImageElement>,
        setAspectClass: React.Dispatch<React.SetStateAction<string>>
    ) => {
        const img = event.currentTarget;
        if (img.naturalWidth > img.naturalHeight) {
            setAspectClass("item-img-landscape");
        } else {
            setAspectClass("item-img-potrait");
        }
    }

    return {
        aspectClass,
        setAspectClass,
        handleImageLoad
    }
};