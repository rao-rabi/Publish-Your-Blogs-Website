import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth/auth";
import { logout } from "../../features/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log("Logout error", error);
      });
  };
  return (
    <button onClick={logoutHandler} className="inline-block py-2 px-6 duration-200 text-lg font-bold hover:bg-indigo-300 rounded-full">
      Logout
    </button>
  );
}

export default LogoutBtn;
