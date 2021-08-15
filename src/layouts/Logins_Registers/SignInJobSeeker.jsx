import React from "react";
import { Link, useHistory } from "react-router-dom";
import KrcTextInput from "../../utilities/CustomFormElements/KrcTextInput";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import JobSeekerService from "../../services/JobSeekerService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/actions/userActions";

export default function SignInJobSeeker() {
  const dispatch = useDispatch();
  let history = useHistory();

  const initialValues = {
    mail: "",
    password: "",
  };
  const schema = Yup.object({
    mail: Yup.string().email().required("Please enter e-mail"),
    password: Yup.string().required("please enter password"),
  });
  const handleSubmit = (values) => {
    const jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeekerByMailAndPassword(values.mail, values.password)
      .then((jbs) => {
        if (jbs.data.success) {
          toast.success("Login Successful", {
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
          });
          dispatch(signIn({type:0,user:jbs.data.data}));
          history.push("/");
          //console.log(user)
        } else {
          toast.error("Please Check informations", {
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
          });
        }
      });
  };
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
            className=" mx-sm-1 row"
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
                className="m-4 img-fluid"
                src="assets/img/individual.svg"
                width="350px"
                style={{ textAlign: "center" }}
              />
            </div>
            <div className="col d-flex flex-column flex-grow-1 flex-shrink-1 justify-content-center align-items-stretch align-content-stretch flex-wrap m-auto">
              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => handleSubmit(values)}
              >
                <Form
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: 14 }}
                >
                  <h1
                    style={{
                      textAlign: "center",
                      fontSize: "31.8857px",
                      marginTop: 4,
                    }}
                  >
                    Sign In{" "}
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
                      name="mail"
                      placeholder="test@test.com"
                      type="email"
                      labelname="E-mail"
                      icon="fa fa-envelope-open"
                    />
                    <span style={{ textAlign: "end", fontWeight: "bold" }}>
                      <Link to="/SignInJobSeekerWithId">With Id</Link>
                    </span>
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
                            className="btn btn-primary border rounded-2"
                            type="submit"
                            style={{
                              width: "150.4673px",
                              fontWeight: "bold",
                            }}
                          >
                            Sign In
                          </button>
                        </div>
                      </div>
                      <div className="row d-block">
                        <Link to="/SignUpJobSeeker">
                          I don't have an <b> Account?</b>
                        </Link>
                      </div>
                      <div className="row d-block mt-2">
                        <Link to="/SignInEmployer">
                          I am <b>Corporate</b>
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
