import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
    const navigate = useNavigate()
    const { mutate: login, isLoading: isLoadingLogin } = useMutation({
        mutationFn: ({ password, email }) => loginApi({ password, email }),

        onSuccess: (user) => {
            toast.success("You are Logged in Baby :)")
            navigate("/dashboard")
            console.log(user)
        },
        onError: (err) => {
            console.log("Error", err)
            toast.error("The provided email or password is incorrect!")

        }
    })

    return { login, isLoadingLogin }
}
