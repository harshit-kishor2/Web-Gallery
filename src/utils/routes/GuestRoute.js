import React, { useContext } from "react";
import AppContext from "../../store/AppContext";
import { Redirect } from "react-router-dom";
import AnimatedRoute from "./AnimatedRoute";
// 2 Guest route
export default function GuestRoute({ children, ...rest }) {
  const [isLoggedIn] = useContext(AppContext);

  if (!isLoggedIn) return <AnimatedRoute {...rest}>{children}</AnimatedRoute>;

  return (
    <AnimatedRoute>
      <Redirect to="/" />;
    </AnimatedRoute>
  );
}
