import { Outlet, Navigate } from "react-router";
import { useSelector } from "react-redux";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function ProtectedRoutes() {
  const loginUser = useSelector((state) => state.users.loginUser);

  // If user is not logged in, redirect to login page
  if (!loginUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default ProtectedRoutes;
