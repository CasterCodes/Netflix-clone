import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Signin, Signup, Browse } from "./pages";
import { IsUserLoggedIn, ProtectedRoute } from "./helpers/routes";

const App = () => {
  const user = null;
  return (
    <Router>
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
        path={ROUTES.HOME}
        exact>
        <Home />
      </IsUserLoggedIn>
      <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
      {/* <Route exact path={ROUTES.HOME} component={Home} /> */}
      {/* <Route exact path={ROUTES.SIGN_UP} component={Signup} /> */}
      {/* <Route exact path={ROUTES.SIGN_IN} component={Signin} /> */}
      {/* <Route exact path={ROUTES.BROWSE} component={Browse} /> */}
    </Router>
  );
};

export default App;
