import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import useRecentBookings from "../features/dashboard/useRecentBookings";
import useRecentStays from "../features/dashboard/useRecentStays";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";

function Dashboard() {
  const { isPending: isPending1 } = useRecentBookings();
  const { isPending: isPending2 } = useRecentStays();
  // console.log(bookings);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      {!isPending1 || !isPending2 ? <DashboardLayout /> : <Spinner />}
    </>
  );
}

export default Dashboard;
