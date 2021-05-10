import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Signin, Signup, Browse } from "./pages";
import { IsUserLoggedIn, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

const App = () => {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserLoggedIn
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          exact>
          <Signin />
        </IsUserLoggedIn>
        <IsUserLoggedIn
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          exact>
          <Signup />
        </IsUserLoggedIn>
        <IsUserLoggedIn
          user={user}
          loggedInPath={ROUTES.HOME}
          exact
          path={ROUTES.HOME}>
          <Home />
        </IsUserLoggedIn>
        <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default App;
