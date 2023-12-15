import { Navigate, Outlet } from "react-router";

const PrivateRouter = ({user_data, update_user}) => {
  return <div>{user_data ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
