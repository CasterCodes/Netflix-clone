import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Signin, Signup, Browse } from "./pages";

const App = () => {
  return (
    <Router>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.SIGN_UP} component={Signup} />
      <Route exact path={ROUTES.SIGN_IN} component={Signin} />
      <Route exact path={ROUTES.BROWSE} component={Browse} />
    </Router>
  );
};

export default App;
