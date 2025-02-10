import { EventChangeProps } from "../schema";
import { useNavigateHome } from "./useNavigateHome";

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

export const useLogin = (
    URL: string,
    params: any
) => {
    const navigateHome = useNavigateHome();

    const handleLogin = async (
        e: { preventDefault: () => void; }
    ) => {
        e.preventDefault();
        
        try {
            const response = await fetch(URL, params);
            const token = response.status === 204 ? null: await response.json();
    
            if (response.ok) {
                document.cookie = `token=${token}; path=/; max-age=3600`; // Expires in 1 hour
                navigateHome();
            } else {
                alert('Error during login!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error during login.');
        }
    }

    return handleLogin
}