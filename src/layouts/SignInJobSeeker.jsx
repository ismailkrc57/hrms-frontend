import React from "react";
import { Link } from "react-router-dom";

export default function SignInJobSeeker() {
  return (
    <div>
      <div className="d-flex flex-row flex-grow-1 flex-shrink-1 flex-fill justify-content-center align-items-center align-content-center align-self-center flex-wrap m-auto">
        <div
          className="container border rounded shadow"
          style={{
            width: "900.985px",
            marginTop: 146,
            marginBottom: 249,
            background: "transparent",
          }}
        >
          <div
            className="row"
            style={{
              borderRadius: 30,
              borderWidth: 2,
              color: "var(--bs-gray-dark)",
              fontFamily: "Poppins, sans-serif",
              boxShadow: "0px 0px 0px 0px",
            }}
          >
            <div
              className="col-sm-12 col-md-12 col-lg-5 col-xl-6 col-xxl-6 d-flex float-start flex-row flex-shrink-1 justify-content-center align-items-center align-content-center align-self-center flex-wrap m-auto align-self-sm-center"
              data-bss-hover-animate="swing"
            >
              <img
                className="img-fluid"
                src="assets/img/looney-virtual-reality.png?h=aab6a6c7b35eed7afcaa16c536ddc4aa"
                width="350px"
                style={{ textAlign: "center" }}
              />
            </div>
            <div className="col d-flex flex-column flex-grow-1 flex-shrink-1 justify-content-center align-items-stretch align-content-stretch flex-wrap m-auto">
              <form style={{ fontFamily: "Poppins, sans-serif", fontSize: 14 }}>
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "31.8857px",
                    marginTop: 4,
                  }}
                >
                  Sign In
                </h1>
                <div className="row" style={{ marginBottom: 4 }}>
                  <div className="col">
                    <div style={{ marginBottom: 6, marginTop: 15 }}>
                      <p
                        className="text-center text-body"
                        style={{
                          marginLeft: 0,
                          marginBottom: 0,
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        E-mail
                      </p>
                      <div
                        className="input-group input-group-sm text-lowercase border rounded d-flex flex-row align-content-start"
                        style={{
                          fontSize: 16,
                          borderRadius: 0,
                          background: "transparent",
                          borderStyle: "solid",
                          borderColor: "var(--bs-blue)",
                        }}
                      >
                        <span className="input-group-text">
                          <i className="fas fa-lock" style={{ fontSize: 15 }} />
                        </span>
                        <input
                          className="form-control"
                          type="email"
                          inputMode="email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginBottom: 4 }}>
                  <div className="col">
                    <div style={{ marginBottom: 6 }}>
                      <p
                        className="text-center text-body"
                        style={{
                          marginLeft: 0,
                          marginBottom: 0,
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        Password&nbsp;
                      </p>
                      <div
                        className="input-group input-group-sm text-lowercase border rounded d-flex flex-row align-content-start"
                        style={{
                          fontSize: 16,
                          borderRadius: 0,
                          background: "transparent",
                          borderStyle: "solid",
                          borderColor: "var(--bs-blue)",
                        }}
                      >
                        <span className="input-group-text">
                          <i className="fas fa-lock" style={{ fontSize: 15 }} />
                        </span>
                        <input
                          className="form-control"
                          type="password"
                          required
                          minLength={7}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginBottom: 4 }}>
                  <div
                    className="col"
                    style={{
                      marginTop: 5,
                      marginBottom: 10,
                      textAlign: "center",
                    }}
                  >
                    <div
                      className="d-flex flex-row flex-grow-1 flex-shrink-1 flex-fill justify-content-center align-items-center align-content-center align-self-center flex-wrap m-auto mb-3"
                      style={{ marginBottom: 6 }}
                    >
                      <div className="btn-group" role="group">
                        <button
                          className="btn btn-primary border rounded-0"
                          type="submit"
                          style={{ width: "150.4673px", fontWeight: "bold" }}
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                    <Link to="/SignUpJobSeeker">
                      I don't have an <b> Account?</b>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
