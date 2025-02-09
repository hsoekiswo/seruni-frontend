interface EventChangeProps {
    target: {
        name: string;
        value: string;
    }
}

export const handleChange = (
    e: EventChangeProps,
    setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>,
    formData: { [key: string]: string }
) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};