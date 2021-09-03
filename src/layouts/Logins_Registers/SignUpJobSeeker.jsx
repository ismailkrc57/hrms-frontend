import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import KrcTextInput from "../../utilities/CustomFormElements/KrcTextInput";
import { toast } from "react-toastify";
import JobSeekerService from "../../services/JobSeekerService";
import { useHistory } from "react-router";


export default function SignUpJobSeeker() {
  const initialValues = {
    name: "",
    surname: "",
    mail: "",
    birthDay: "",
    nationalityId: "",
    password: "",
    passwordRepeat: "",
  };
  const schema = Yup.object({
    name: Yup.string().required("name required"),
    surname: Yup.string().required("surname required"),
    mail: Yup.string().email().required("mail reqired"),
    birthDay: Yup.date().required("birthday required"),
    nationalityId: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(11, "Must be exactly 11 digits")
      .max(11, "Must be exactly 11 digits"),
    password: Yup.string()
      .required("password required")
      .min(5, "must be greater than 5 char "),
    passwordRepeat: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const history = useHistory();
  const handleSubmit = (values) => {
    const jobSeekerService = new JobSeekerService();
    jobSeekerService.addJobSeeker(values).then((msg) => {
      if (msg.data.success) {
        toast.success(msg.data.message);
        history.push("/SignInJobSeeker")
      } else {
        toast.error(msg.data.message);
      }
       
    });
    
   
  };

  return (
    <div>
      <div className="d-flex flex-row flex-grow-1 flex-shrink-1 flex-fill justify-content-center align-items-center align-content-center align-self-center  m-auto">
        <div
          className="container border rounded-2 shadow"
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
                alt={"resim".toString()}
                className="img-fluid"
                src="assets/img/signup.svg"
                width="380px"
                style={{ textAlign: "center" }}
              />
            </div>
            <div className="col">
              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => handleSubmit(values)}
              >
                <Form
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 14,
                  }}
                >
                  <h1
                    style={{
                      textAlign: "center",
                      fontSize: "31.8857px",
                      marginTop: 4,
                    }}
                  >
                    Sign Up{" "}
                    <b>
                      <span
                        style={{
                          fontSize: "25px",
                          color: "#F50057",
                          fontWeight: "bold",
                        }}
                      >
                        JobSeeker
                      </span>
                    </b>
                  </h1>
                  <div className="row" style={{ marginBottom: 4 }}>
                    <KrcTextInput
                      name="name"
                      placeholder="name"
                      type="text"
                      labelname="Name"
                      icon="fas fa-user"
                    />

                    <KrcTextInput
                      name="surname"
                      placeholder="surname"
                      type="text"
                      labelname="Surname"
                      icon="fas fa-user"
                    />
                  </div>
                  <div className="row" style={{ marginBottom: 4 }}>
                    <KrcTextInput
                      name="mail"
                      placeholder="test@test.com"
                      type="email"
                      labelname="E-mail"
                      icon="fa fa-envelope-open"
                    />
                    <KrcTextInput
                      name="nationalityId"
                      placeholder="12345678901"
                      type="text"
                      labelname="Nationality Id"
                      icon="fas fa-id-card"
                    />
                  </div>
                  <div className="row" style={{ marginBottom: 4 }}>
                    <KrcTextInput
                      name="birthDay"
                      placeholder=""
                      type="date"
                      labelname="Birthday"
                      icon="bi bi-calendar2-date-fill"
                    />
                  </div>
                  <div className="row" style={{ marginBottom: 4 }}>
                    <KrcTextInput
                      name="password"
                      placeholder=""
                      type="password"
                      labelname="Password"
                      icon="fas fa-lock"
                    />
                  </div>
                  <div className="row" style={{ marginBottom: 4 }}>
                    <KrcTextInput
                      name="passwordRepeat"
                      placeholder=""
                      type="password"
                      labelname="Password Repeat"
                      icon="fas fa-lock"
                    />
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
                            style={{
                              width: "150.4673px",
                              fontWeight: "bold",
                            }}
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                      <div className="row d-block">
                        <Link to="/SignInJobSeeker">
                          I already have an <b> Account?</b>
                        </Link>
                      </div>
                      <div className="row d-block mt-2">
                        <Link to="/SignUpEmployer">
                          I am <b> Corporate</b>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
