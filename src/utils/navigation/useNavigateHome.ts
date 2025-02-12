import { useNavigate } from "react-router";

const useNavigateHome = () => {
    const navigate = useNavigate();
    
    return () => navigate("/");
}

export default useNavigateHome;