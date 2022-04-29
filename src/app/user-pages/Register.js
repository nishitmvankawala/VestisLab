import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from 'yup';

function Register() {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });
  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-5 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src={require("../../assets/images/logo.svg")} alt="logo" />
              </div>
              <h4>New here?</h4>
              <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
              
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <input
                    name="fullname"
                    placeholder="Full Name"
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.fullname}
                  />
                  <div className="text-danger">
                    {formik.errors.fullname ? formik.errors.fullname : null}
                  </div>
                </div>
                <div className="form-group">
                  <input
                    name="username"
                    placeholder="Username"
                    type="text"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                  <div className="text-danger">
                    {formik.errors.username ? formik.errors.username : null}
                  </div>
                </div>
                <div className="form-group">
                  <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  <div className="text-danger">
                    {formik.errors.email ? formik.errors.email : null}
                  </div>
                </div>
                <div className="form-group">
                  <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <div className="text-danger">
                    {formik.errors.password ? formik.errors.password : null}
                  </div>
                </div>
                <div className="form-group">
                  <input
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                  <div className="text-danger">
                    {formik.errors.confirmPassword
                      ? formik.errors.confirmPassword
                      : null}
                  </div>
                </div>
                <div className="form-group form-check">
                  <input
                    name="acceptTerms"
                    type="checkbox"
                    className="form-check-input register-checkbox"
                    onChange={formik.handleChange}
                    value={formik.values.acceptTerms}
                  />
                  <label htmlFor="acceptTerms" className="form-check-label">
                    I have read and agree to the Terms
                  </label>
                  <div className="text-danger">
                    {formik.errors.acceptTerms ? formik.errors.acceptTerms : null}
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                  {/* <button
                    type="button"
                    className="btn btn-warning float-right"
                    onClick={formik.handleReset}
                  >
                    Reset
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Register
