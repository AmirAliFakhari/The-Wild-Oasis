import { updateSetting } from "../../services/apiSettings";
import Form from "../../ui/Form";
import FormRow from "../../ui/FornRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import useUpdateSetting from "./useEditCabin";
import useSettings from "./useSettings";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: { maxBookingLength, minBookingLength, maxGuestsPerBooking } = {},
  } = useSettings();

  const { isUpdating, upadteSetting } = useUpdateSetting();
  if (isLoading) return <Spinner />;

  function handleUpdate(e, filed) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [filed]: value });
  }
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
