/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from "react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { Link } from "react-router-dom";

export default function Navi() {
 const [isAuthenticated, setisAuthenticated] = useState(true)

 function handleSignOut(params) {
   setisAuthenticated(false)
 }
 function handleSignIn(params) {
   setisAuthenticated(true);
 }

  return (
    <div>
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div className="logo  mx-5">
              <h1 style={{textDecoration:"underline"}}>
                <Link to="/" >H.R.M.S.</Link>
              </h1>
              {/* Uncomment below if you prefer to use an image logo */}
              {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
            </div>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href={"".toString()} className="nav-link px-2 link-dark">
                  Overview
                </a>
              </li>
              <li>
                <a href={"".toString()} className="nav-link px-2 link-dark">
                  Inventory
                </a>
              </li>
              <li>
                <a href={"".toString()} className="nav-link px-2 link-dark">
                  Customers
                </a>
              </li>
              <li>
                <a href={"".toString()} className="nav-link px-2 link-dark">
                  Products
                </a>
              </li>
            </ul>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            {isAuthenticated ? <SignedIn signOut = {handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
          </div>
        </div>
      </header>
    </div>
  );
}
