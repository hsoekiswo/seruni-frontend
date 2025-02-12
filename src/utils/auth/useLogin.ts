import useNavigateHome from "@utils/navigation/useNavigateHome";

const useLogin = (
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

export default useLogin;