interface EventChangeProps {
    target: {
        name: string;
        value: string | number;
    }
}

export const handleChange = <T extends Record<string, any>>(
    e: EventChangeProps,
    setFormData: React.Dispatch<React.SetStateAction<T>>,
    formData: T
    ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

export const handleSubmit = async (
    e: { preventDefault: () => void; },
    URL: string,
    params: any,
    ) => {
    e.preventDefault();

    try {
        const response = await fetch(URL, params);

        if (response.ok) {
            alert('Form submitted successfully!');
        } else {
            alert('Error submitting form!');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};