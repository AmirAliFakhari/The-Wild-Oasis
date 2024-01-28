import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export default function useCheckin() {
    const queryClient = useQueryClient()
    const params = useParams()
    const navigate = useNavigate();

    const { isLoading: isChecking, mutate: checkin } = useMutation({
        mutationFn: ({ bookingId, breakfast }) => updateBooking(bookingId, {
            status: "checked-in",
            isPaid: true,
            ...breakfast
        }),

        onSuccess: (data) => {
            toast.success(`Booking #${data.id} succesfully checked in`)
            queryClient.invalidateQueries({ active: true })
            navigate("/")
        },

        onError: () => toast.error(`the was an error while checking in ${params.bookingId} cabin!`)

    })
    return { checkin, isChecking }
}
