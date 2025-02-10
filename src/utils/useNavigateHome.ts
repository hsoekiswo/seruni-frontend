import { useNavigate } from "react-router";

export const useNavigateHome = () => {
    const navigate = useNavigate();
    
    return () => navigate("/");
}