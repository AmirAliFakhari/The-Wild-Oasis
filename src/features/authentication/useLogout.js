import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import logout from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { mutate: logoutUser, isPending: isLogoutLoading, } = useMutation({

        mutationFn: logout,

        onSuccess: () => {
            toast.success("Succesfully Loged out")
            queryClient.removeQueries()
            navigate("/login", { replace: true })
            // queryClient.invalidateQueries({ queryKey: ["user"] })
        },

        onError: () => toast.error("nashod")

    })

    return { logoutUser, isLogoutLoading }
}
