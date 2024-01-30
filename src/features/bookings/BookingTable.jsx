// import styled from 'styled-components';
import BookingRow from "../../features/bookings/BookingRow";
import Table from "../../ui/Table";
import useBookings from "../../features/bookings/useBookings";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";

function BookingTable() {
  // const { bookings, isLoading } = useBookings();
  const { bookings, count, isLoading } = useBookings();
  // console.log(bookings);
  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>
        ّ
        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
