import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import useBooking from "./useBooking";
import Spinner from "../../ui/Spinner";
import { HiArrowDownOnSquare } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import useCheckout from "../check-in-out/useCheckout";
import useDeleteBooking from "./useDeleteBooking";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteEachBooking, isDeletingBooking } = useDeleteBooking();
  const moveBack = useMoveBack();
  const navigate = useNavigate();
  // const status = "checked-in";
  if (isLoading || isCheckingOut || isDeletingBooking) return <Spinner />;
  if (!booking) return <Empty resource="booking" />;
  // console.log(booking);
  const { id: bookingId, status } = booking;
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  // if (!booking) return <Empty resource="booking" />;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}
        {status === "checked-in" && (
          <Button onClick={() => checkout(bookingId)}>Check out</Button>
        )}
        <Modal>
          <Modal.Open id="delete">
            <Button variation="danger" onClick={moveBack}>
              Delete
            </Button>
          </Modal.Open>
          <Modal.Window id="delete">
            <ConfirmDelete
              disabled={isDeletingBooking}
              onConfirm={() =>
                deleteEachBooking(bookingId, {
                  onSettled: () => navigate(-1),
                })
              }
              // onCloseModal={() =>   }
              resourceName={bookingId}
              key={bookingId}
            />
          </Modal.Window>
        </Modal>
        <Button
          variation="secondary"
          onClick={() => {
            deleteEachBooking(bookingId);
            navigate("/");
          }}
        >
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
