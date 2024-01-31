import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
// import useLogin from "./useLogin";
import useLogout from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

export default function Logout() {
  const { isLogoutLoading, logoutUser } = useLogout();
  // console.log(isLogoutLoading);

  return (
    <>
      <ButtonIcon disabled={isLogoutLoading} onClick={logoutUser}>
        {!isLogoutLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
      </ButtonIcon>
    </>
  );
}
