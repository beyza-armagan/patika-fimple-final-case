import PropTypes from "prop-types";
import { Route, Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ component: Component, admin, ...rest }) {
  const { loggedIn, user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (admin && user.role !== "admin") {
          return <Navigate to={{ pathname: "/" }} />;
        }

        if (loggedIn) {
          return <Component {...props} />;
        }

        return <Navigate to={{ pathname: "/" }} />;
      }}
    />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  admin: PropTypes.bool,
};

export default ProtectedRoute;
