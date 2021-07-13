import React from "react";
import { Link, useHistory } from "react-router-dom";
import KrcTextInput from "../../utilities/CustomFormElements/KrcTextInput";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import JobSeekerService from "../../services/JobSeekerService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/actions/userActions";

export default function SignInJobSeekerWithId() {
  const dispatch = useDispatch();
  let history = useHistory();

  const initialValues = {
    nationalityId:"",
    password: "",
  };
  const schema = Yup.object({
    nationalityId: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(11, "Must be exactly 11 digits")
      .max(11, "Must be exactly 11 digits"),
    password: Yup.string().required("please enter password"),
  });
  const handleSubmit = (values) => {
    const jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeekerByNatioanlityIdAndPassword(
        values.nationalityId,
        values.password
      )
      .then((jbs) => {
        if (jbs.data.success) {
          toast.success("Login Successful", {
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
          });
          dispatch(signIn(jbs.data.data));
          history.push("/");
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
                      name="nationalityId"
                      placeholder="12345678901"
                      type="number"
                      labelname="Nationality Id"
                      icon="fa fa-id-card"
                    />
                    <span style={{ textAlign: "end", fontWeight: "bold" }}>
                      <Link to="/SignInJobSeeker">With mail</Link>
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
                      <div className="row">
                        <Link to="/SignUpJobSeeker">
                          I don't have an <b> Account?</b>
                        </Link>
                      </div>
                      <div className="row mt-4">
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
