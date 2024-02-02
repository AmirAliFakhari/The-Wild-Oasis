import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import useRecentBookings from "../features/dashboard/useRecentBookings";
import useRecentStays from "../features/dashboard/useRecentStays";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";

function Dashboard() {
  const { bookings, isPending: isPending1 } = useRecentBookings();
  const { confirmedStaus, isPending: isPending2, stays } = useRecentStays();
  console.log(bookings);

  if (isPending1 || isPending2) return <Spinner />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
