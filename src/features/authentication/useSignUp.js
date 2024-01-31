import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export default function useSignup() {
    const { mutate: signup, isPending: isLoadingSignUp } = useMutation({
        mutationFn: ({ email, password, fullName }) => signupApi({ email, password, fullName }),

        onSuccess: (data) => {
            toast.success(`account susccesfully created :) please verify the email: ${data.user.email}`)
            console.log(data)
        },

        onError: () => toast.error("error")
    })

    return { isLoadingSignUp, signup }

}
