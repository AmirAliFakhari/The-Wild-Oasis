import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../../services/apiBookings"

export default function useBookings() {
    const { data: bookings } = useQuery({
        queryKey: ["bookings"],
        queryFn: getBookings,
    })
    // console.log(bookings)

    return { bookings }

}
