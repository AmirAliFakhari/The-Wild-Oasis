import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export default function useCheckin() {
    const queryClient = useQueryClient()
    const { isLoading: isChecking, mutate: checkin } = useMutation({
        mutationFn: (bookingId) => updateBooking(bookingId, {
            status: "checked-in",
            isPaid: true
        }),

        onSuccess: (data) => {
            toast.success(`Booking #${data.id} succesfully checked in`)
            queryClient.invalidateQueries({ active: true })
        },

        onError: () => toast.error(`the was an error while checking in !`)

    })
    return { checkin, isChecking }
}
