import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import KrcTextInput from "../../utilities/CustomFormElements/KrcTextInput";
import { toast } from "react-toastify";
import JobSeekerService from "../../services/JobSeekerService";
import EmployerService from "../../services/EmployerService";

export default function SignUpEmployer() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const webSiteRegExp =
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
  const initialValues = {
    companyName: "",
    mail: "",
    phoneNumber: "",
    webSite: "",
    password: "",
    passwordRepeat: "",
  };
  const schema = Yup.object({
    companyName: Yup.string().required("Company Name required"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("phone Number required"),
    mail: Yup.string().email().required("mail reqired"),
    webSite: Yup.string()
      .matches(webSiteRegExp, "enter correct format webiste")
      .required("webSite required"),
    password: Yup.string()
      .required("password required")
      .min(5, "must be greater than 5 char "),
    passwordRepeat: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const handleSubmit = (values) => {
    console.log(values);
    const employerService = new EmployerService();
    employerService.adEmployer(values).then((msg) => {
      if (msg.data.success) {
        toast.success(msg.data.message);
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
                src="assets/img/signUpEmployer.svg"
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
                        Employer
                      </span>
                    </b>
                  </h1>
                  <div className="row" style={{ marginBottom: 4 }}>
                    <KrcTextInput
                      name="companyName"
                      placeholder="Company Name"
                      type="text"
                      labelname="company Name"
                      icon="fas fa-user"
                    />

                    <KrcTextInput
                      name="phoneNumber"
                      placeholder="phone Number"
                      type="text"
                      labelname="Phone Number"
                      icon="fa fa-phone"
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
                      name="webSite"
                      placeholder="www.test.com"
                      type="text"
                      labelname="Web Site"
                      icon=" fa fa-link"
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
                        <Link to="/SignInEmployer">
                          I already have an <b> Account?</b>
                        </Link>
                      </div>
                      <div className="row d-block mt-2">
                        <Link to="/SignUpJobSeeker">
                          I am <b> JobSeeker</b>
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
