import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function useCheckout() {
    const queryClient = useQueryClient()
    const params = useParams()
    // const navigate = useNavigate();

    const { isLoading: isCheckingOut, mutate: checkout } = useMutation({
        mutationFn: (bookingId) => updateBooking(bookingId, {
            status: "checked-out",
        }),

        onSuccess: (data) => {
            toast.success(`Booking #${data.id} succesfully checked out`)
            queryClient.invalidateQueries({ active: true })
            // navigate("/")
        },

        onError: () => toast.error(`the was an error while checking out ${params.bookingId} cabin!`)

    })
    return { checkout, isCheckingOut }
}
