import Form from "../../ui/Form";
import FormRow from "../../ui/FornRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import useSettings from "./useSettings";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: { maxBookingLength, minBookingLength, maxGuestsPerBooking } = {},
  } = useSettings();

  if (isLoading) <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input type="number" id="min-nights" defaultValue={minBookingLength} />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input type="number" id="max-nights" defaultValue={maxBookingLength} />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={maxBookingLength}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
