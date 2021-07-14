// import default style
import Footer from "./layouts/Footer";
import "./App.css";
import Navi from "./layouts/Navi.jsx";
import SignUpJobSeeker from "./layouts/Logins_Registers/SignUpJobSeeker";
import SignInJobSeeker from "./layouts/Logins_Registers/SignInJobSeeker";
import MainPage from "./layouts/MainPage";
import { Route, Switch } from "react-router";
import { ToastContainer } from "react-toastify";
import SignInEmployer from "./layouts/Logins_Registers/SignInEmployer";
import SignInJobSeekerWithId from "./layouts/Logins_Registers/SignInJobSeekerWithId";
import NotFound from "./layouts/NotFound/NotFound";
import SignUpEmployer from "./layouts/Logins_Registers/SignUpEmployer";

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center" />
      <Navi />
      {/* <Section /> */}
      {/* <Dashboard /> */}
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/SignUpJobSeeker" component={SignUpJobSeeker} />
        <Route path="/SignInJobSeeker" component={SignInJobSeeker} />
        <Route
          path="/SignInJobSeekerWithId"
          component={SignInJobSeekerWithId}
        />
        <Route path="/SignUpEmployer" component={SignUpEmployer} />
        <Route path="/SignInEmployer" component={SignInEmployer} />
        <Route>
          <NotFound />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
