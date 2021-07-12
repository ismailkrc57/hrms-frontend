// import default style
import Footer from './layouts/Footer';
import './App.css';
import Navi from "./layouts/Navi.jsx";
import SignUpJobSeeker from './layouts/Logins_Registers/SignUpJobSeeker';
import SignInJobSeeker from './layouts/Logins_Registers/SignInJobSeeker';
import MainPage from './layouts/MainPage';
import { Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Switch from 'react-bootstrap/esm/Switch';
import SignInEmployer from './layouts/Logins_Registers/SignInEmployer';


function App() {
    return (
      <div className="App">
        <ToastContainer position="top-center" />
        <Navi />
        {/* <Section /> */}
        {/* <Dashboard /> */}
        <Switch>
          <Route exact path="/SignUpJobSeeker" component={SignUpJobSeeker} />
          <Route exact path="/SignInJobSeeker" component={SignInJobSeeker} />
          <Route exact path="/SignInEmployer" component={SignInEmployer} />
          <Route exact path="/" component={MainPage} />
        </Switch>

        <Footer />
      </div>
    );
}

export default App;
