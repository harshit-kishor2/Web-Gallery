import React, { useContext } from "react";
import AppContext from "../../store/AppContext";
import { Redirect } from "react-router-dom";
import AnimatedRoute from "./AnimatedRoute";
// 1 Protected route.... Check user login or not
export default function AuthRoute({ children, ...rest }) {
  const [isLoggedIn] = useContext(AppContext);

  if (isLoggedIn) return <AnimatedRoute {...rest}>{children}</AnimatedRoute>;

  return (
    <AnimatedRoute>
      <Redirect to="/login" />;
    </AnimatedRoute>
  );
}
