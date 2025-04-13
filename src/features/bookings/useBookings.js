import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";


export function useBookings() {
    const [searchParams] = useSearchParams();

    //Filter
    const filterValue = searchParams.get('status');
    const filter = !filterValue || filterValue === 'all' ? null : { field: 'status', value: filterValue, method: 'eq' };

    //Sorting
    const sortByRaw = searchParams.get('sortBy') || 'startDate-asc';
    const [field, direction] = sortByRaw.split('-');
    const sortBy = { field, direction };

    //Pagination
    const page = Number(searchParams.get('page')) || 1;

    const { isLoading, data: { data: bookings, count } = {}, error
    } = useQuery({
        queryKey: ["bookings", filter, sortBy, page],
        queryFn: () => getBookings({ filter, sortBy, page }),
    });

    return { bookings, isLoading, error, count };
}