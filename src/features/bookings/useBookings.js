import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../../services/apiBookings"

export default function useBookings() {
    const { data } = useQuery({
        queryKey: ["bookings"],
        queryFn: getBookings,
    })
    // console.log(bookings)

    return { data }

}
