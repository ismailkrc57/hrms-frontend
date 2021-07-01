// import default style
import Footer from './layouts/Footer';
import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from "./layouts/Navi.jsx";
import Section from './layouts/Section';
import SignUpJobSeeker from './layouts/SignUpJobSeeker';
import SignInJobSeeker from './layouts/SignInJobSeeker';
import MainPage from './layouts/MainPage';
import { Route } from 'react-router';


function App() {
    return (
      <div className="App">
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
