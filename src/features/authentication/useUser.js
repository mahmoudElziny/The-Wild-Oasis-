import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";


export function useUser() {
    const { isloading, data: user } = useQuery({
        queryKey: ["user"],
        queryFn: getCurrentUser,
    });

    return { isloading, user, isAuthenticated: user?.role === "authenticated" };
}