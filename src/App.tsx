import React, { useContext } from "react";


// context
import { AuthContext } from "./context/auth-context";

import useApi from "./services/useApi";

// routes
import {
  AuthenticatedRoutes,
  UnauthenticatedRoutes,
} from "./routes/App.routes";

const App: React.FC = () => {

  const {loading, data} = useApi()

  console.log(loading,data)

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return isLoggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
};

export default App;
