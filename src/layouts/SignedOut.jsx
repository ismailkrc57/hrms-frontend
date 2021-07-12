/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

export default function SignedOut({signIn}) {
  return (
    <div>
      {/* <div className="d-inline" >
          <a className="getstarted d-inline" href={"".toString()}="#">
            Sign In
          </a>
        </div>
        <div className="d-inline">
          <a className="getstarted d-inline" href={"".toString()}="#">
            Sign Up
          </a>
        </div> */}

      <div className="col-md-3  d-flex-center me-2 d-inline">
        <Link to="/SignInJobSeeker">
          <button type="button" className="btn btn-outline-primary mx-2">
            Sign-In
          </button>
        </Link>
        <Link to="/SignUpJobSeeker">
          <button type="button" className="btn btn-outline-primary d-flex-end">
            Sign-up
          </button>
        </Link>
      </div>
    </div>
  );
}
