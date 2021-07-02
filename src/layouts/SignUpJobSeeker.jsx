import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function SignUpJobSeeker() {
  return (
    <div>
      <div className="d-flex flex-row flex-grow-1 flex-shrink-1 flex-fill justify-content-center align-items-center align-content-center align-self-center  m-auto">
        <div
          className="container border rounded shadow"
          style={{
            width: "900.985px",
            marginTop: 126,
            marginBottom: 192,
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
                src="assets/img/looney-sign-up-form.png?h=e499cfee6b5d59ffcdb6a7e31983b80d"
                width="350px"
                style={{ textAlign: "center" }}
              />
            </div>
            <div className="col">
              <form style={{ fontFamily: "Poppins, sans-serif", fontSize: 14 }}>
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "31.8857px",
                    marginTop: 4,
                  }}
                >
                  Sign Up
                </h1>
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
                        Name
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
                          <i className="fas fa-user" style={{ fontSize: 15 }} />
                        </span>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          inputMode="latin-name"
                          required
                          minLength={2}
                          name="name"
                          placeholder="name"
                        />
                      </div>
                    </div>
                  </div>
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
                        Surname
                      </p>
                      <div
                        className="input-group input-group-sm text-lowercase border rounded d-flex flex-row align-content-start"
                        style={{ fontSize: 16, borderRadius: 0 }}
                      >
                        <span className="input-group-text">
                          <i className="fas fa-user" style={{ fontSize: 15 }} />
                        </span>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          inputMode="latin-name"
                          required
                          minLength={2}
                          name="surname"
                          placeholder="surname"
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
                        E-mail
                      </p>
                      <div
                        className="input-group input-group-sm text-lowercase border rounded d-flex flex-row align-content-start"
                        style={{ fontSize: 16, borderRadius: 0 }}
                      >
                        <span className="input-group-text">
                          <i
                            className="fa fa-envelope-open"
                            style={{ fontSize: 15 }}
                          />
                        </span>
                        <input
                          className="form-control form-control-sm"
                          type="email"
                          placeholder="test@test.com"
                          required
                        />
                      </div>
                    </div>
                  </div>
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
                        Nationality Id
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
                          <i
                            className="fas fa-id-card"
                            style={{ fontSize: 15 }}
                          />
                        </span>
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          inputMode="numeric"
                          required
                          minLength={11}
                          placeholder={12345678901}
                          maxLength={11}
                          autoComplete="on"
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
                        Birthday
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
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="bi bi-calendar2-date-fill"
                            style={{ fontSize: 15 }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 3.5c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1zm7.336 9.29c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm.066-2.544c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2zm-2.957-2.89v5.332H5.77v-4.61h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"
                            />
                          </svg>
                        </span>
                        <input
                          className="form-control form-control-sm"
                          type="date"
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
                          className="form-control form-control-sm"
                          type="text"
                          inputMode="latin-name"
                          required
                          minLength={5}
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
                        Password Repeat
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
                          minLength={5}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ marginBottom: 4 }}>
                  <div
                    className="col"
                    style={{ marginTop: 5, marginBottom: 10 }}
                  >
                    <div
                      className="d-flex flex-row flex-grow-1 flex-shrink-1 flex-fill justify-content-center align-items-center align-content-center align-self-center flex-wrap m-auto mb-3"
                      style={{ marginBottom: 6 }}
                    >
                      <div className="btn-group" role="group">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          style={{ width: "150.4673px", fontWeight: "bold" }}
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                    <Link to="/SignInJobSeeker">
                      I already have an <b> Account?</b>
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
