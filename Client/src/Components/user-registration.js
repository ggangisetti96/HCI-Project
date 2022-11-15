import * as React from "react";
import { Link } from "react-router-dom";
import { userRegisrationURL } from "../Constants/AppLinks";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  const { firstName, lastName, email, password1, password2 } = data;

  const changeHandler = (e) => {
    setError(null);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      setError("Passwords do not match!");
    } else {
      fetch(userRegisrationURL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message === "Success") {
            console.log("Success");
            navigate("/login");
          } else {
            setError("User already exists!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="mask d-flex align-items-center h-100 m-5">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-8 col-md-5 col-lg-5">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body p-5">
                <h3 className="text-center mb-3">Signup</h3>

                <form onSubmit={submitHandler}>
                  <div className="form-outline mb-3">
                    <input
                      type="text"
                      className="form-control form-control-md"
                      name="firstName"
                      id="firstName"
                      required
                      value={firstName}
                      placeholder=" Enter your First Name"
                      onChange={changeHandler}
                    />
                    <label className="form-label" htmlFor="firstName">
                      First Name*
                    </label>
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="text"
                      className="form-control form-control-md"
                      name="lastName"
                      id="lastName"
                      value={lastName}
                      required
                      placeholder=" Enter your Last Name"
                      onChange={changeHandler}
                    />
                    <label className="form-label" htmlFor="lastName">
                      Last Name*
                    </label>
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="email"
                      className="form-control form-control-md"
                      name="email"
                      id="email"
                      required
                      value={email}
                      placeholder=" Enter your Email Address"
                      onChange={changeHandler}
                    />
                    <label className="form-label" htmlFor="email">
                      Your Email*
                    </label>
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      className="form-control form-control-md"
                      name="password1"
                      id="password1"
                      required
                      value={password1}
                      placeholder=" Enter Your Password"
                      onChange={changeHandler}
                      minLength={8}
                    />
                    <label className="form-label" htmlFor="password1">
                      Password*
                    </label>
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      className="form-control form-control-md"
                      name="password2"
                      id="password2"
                      value={password2}
                      required
                      placeholder=" Confirm Your Password"
                      onChange={changeHandler}
                      minLength={8}
                    />
                    <label className="form-label" htmlFor="password2">
                      Confirm your Password*
                    </label>
                  </div>

                  <div className="d-flex justify-content-center" name="submit">
                    <button className="btn bg-success btn-block btn-md">
                      Register
                    </button>
                  </div>

                  {
                    <div
                      className="error-message d-flex justify-content-center"
                      name="error"
                    >
                      {error}
                    </div>
                  }

                  <p className="text-center text-muted mt-5 mb-0">
                    Already have an account?
                    <Link to="/login" className="fw-bold text-body">
                      <u>Log in Here</u>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
