import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export default function useCreateCabin() {
    const queryClient = useQueryClient();

    const { mutate: createCabin, isLoading: isCreating } = useMutation({
        mutationFn: createEditCabin,
        onSuccess: () => {
            toast.success("a new cabin created");
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
        },
        onError: (err) => toast.error(err.message),
    });
    return { createCabin, isCreating }
}
