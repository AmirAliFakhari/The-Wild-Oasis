import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../../services/apiBookings"
import { useSearchParams } from "react-router-dom"
import { useQueryClient } from "@tanstack/react-query"
import { PAGE_SIZE } from "../../utils/constant"

export default function useBookings() {
    const [searchParams] = useSearchParams()
    const queryClient = useQueryClient()

    const filterdValue = searchParams.get("status")
    const filter = !filterdValue || filterdValue === "all" ? null
        :
        { field: "status", value: filterdValue }
    const sortByRaw = searchParams.get("sortBy") || "startDate-desc"
    const [field, direction] = sortByRaw.split("-")
    const sortBy = { field, direction }

    const page = !searchParams.get("page")
        ? 1
        : Number(searchParams.get("page"));

    const {
        data: { data: bookings, count } = {}, isLoading
    } = useQuery({
        queryKey: ["bookings", filter, sortBy, page],
        queryFn: () => getBookings({ filter, sortBy, page })
    })


    const pageCount = Math.ceil(count / PAGE_SIZE)


    //pre-fetching
    if (pageCount > page) {
        queryClient.prefetchQuery({
            queryKey: ["bookings", filter, sortBy, page + 1],
            queryFn: () => getBookings({ filter, sortBy, page: page + 1 })
        })
    }

    if (page > 1) {
        queryClient.prefetchQuery({
            queryKey: ["bookings", filter, sortBy, page - 1],
            queryFn: () => getBookings({ filter, sortBy, page: page - 1 })
        })
    }
    return { bookings, isLoading, count }

}
