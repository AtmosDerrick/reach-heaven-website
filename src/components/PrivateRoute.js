import React, { useContext } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return <div>{!!currentUser ? <Outlet /> : <Navigate to={"/signin"} />}</div>;
};

export default PrivateRoute;
