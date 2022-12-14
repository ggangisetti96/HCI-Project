import * as React from "react";
import { useNavigate } from "react-router-dom";
import { loginURL } from "../Constants/AppLinks";
import { Link } from "react-router-dom";

function LoginPage({ toggleAuthenticationFlag, setUser }) {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(loginURL, {
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
          toggleAuthenticationFlag(true);
          setUser(res.data);
          navigate("/home");
        } else {
          setError("Invalid email or password!");
        }
      })
      .catch((err) => {
        setError("Internal server error!");
      });
  };

  return (
    <div style={{ height: "80vh" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10 col-md-7 col-lg-5">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body p-5">
                <h3 className="text-center mb-3">Login</h3>
                <form onSubmit={submitHandler}>
                  <div className="form-outline mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-md"
                      value={email}
                      required
                      placeholder=" Email Address"
                      onChange={changeHandler}
                    />
                    <label className="form-label" htmlFor="form3Example1cg">
                      Email
                    </label>
                  </div>
                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      name="password"
                      className="form-control form-control-md"
                      value={password}
                      placeholder=" Password"
                      required
                      minLength={8}
                      onChange={changeHandler}
                    />
                    <label className="form-label" htmlFor="form3Example1cg">
                      Password
                    </label>
                  </div>
                  <div className="d-flex justify-content-center">
                    <input
                      type="submit"
                      name="Login"
                      className="btn btn-block btn-md btn-success"
                    />
                  </div>
                </form>
                <div className="d-flex justify-content-center">
                  <Link to="/register" className="fw-bold text-body p-3">
                    <u>Register as a new user!</u>
                  </Link>
                </div>
                {
                  <div className="error-message d-flex justify-content-center text-danger">
                    {error}
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
