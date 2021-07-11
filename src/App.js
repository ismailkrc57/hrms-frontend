// import default style
import Footer from './layouts/Footer';
import './App.css';
import Navi from "./layouts/Navi.jsx";
import SignUpJobSeeker from './layouts/SignUpJobSeeker';
import SignInJobSeeker from './layouts/SignInJobSeeker';
import MainPage from './layouts/MainPage';
import { Route } from 'react-router';
import { ToastContainer } from 'react-toastify';


function App() {
    return (
      <div className="App">
        <ToastContainer position="top-center" />
        <Navi />
        {/* <Section /> */}
        {/* <Dashboard /> */}
        <Route exact path="/" component={MainPage} />
        <Route exact path="/SignUpJobSeeker" component={SignUpJobSeeker} />
        <Route exact path="/SignInJobSeeker" component={SignInJobSeeker} />
        <Footer />
      </div>
    );
}

export default App;
