import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";
import useSignup from "./useSignUp";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { formState, register, getValues, handleSubmit, reset } = useForm();
  const { isLoadingSignUp, signup } = useSignup();
  const { errors } = formState;
  function onSubmit({ fullName, password, email }) {
    // console.log(data, errors);
    signup(
      { password, email, fullName },
      {
        onSettled: reset(),
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoadingSignUp}
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoadingSignUp}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "The email is not correct!",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoadingSignUp}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "The password should has at least 8 characters!",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoadingSignUp}
          ب
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues("password") || "Passwords need to be matched",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        {!isLoadingSignUp ? <Button>Create new user</Button> : <SpinnerMini />}
      </FormRow>
    </Form>
  );
}

export default SignupForm;
