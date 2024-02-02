import styled from "styled-components";
import Stats from "./Stats";
import useRecentBookings from "./useRecentBookings";
import useRecentStays from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";
import Spinner from "../../ui/Spinner";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  const { bookings, isPending: isPending1 } = useRecentBookings();
  const {
    confirmedStaus,
    isPending: isPending2,
    stays,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading } = useCabins();

  if (isPending1 || isPending2 || isLoading) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        numDays={numDays}
        cabinCount={cabins.length}
        confirmedStays={confirmedStaus}
      />
    </StyledDashboardLayout>
  );
}
