import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export default function useDeleteBooking() {
    const queryClient = useQueryClient();

    const { isLoading: isDeletingBooking, mutate: deleteEachBooking } = useMutation({
        mutationFn: (bookingId) => deleteBooking(bookingId),
        onSuccess: () => {
            toast.success("Cabin successfully deleted");

            queryClient.invalidateQueries({
                queryKey: ["bookings"],
            });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isDeletingBooking, deleteEachBooking };
}
