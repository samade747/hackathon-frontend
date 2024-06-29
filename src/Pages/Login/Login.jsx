import { useState } from "react";
import "./login.css";
import axios from "axios";
import { URL } from "../../Utils/url.js";
import { useDispatch } from "react-redux";
import {
  loginSuccess,
  loginFailure,
  loginStart,
} from "../../Redux/Slices/UserSlice.jsx";
import { json, useNavigate } from "react-router-dom";
import SideModal from "../../Components/SideModal/SideModal.jsx";
import { Link } from "react-router-dom";

const api = axios.create({
  baseURL: URL,
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(email, password);

    if (email && password) {
      dispatch(loginStart());
      api
        .post("/auth/login", {
          email,
          password,
        })
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("token", JSON.stringify(res.data.token));
          dispatch(loginSuccess(res.data.data));
          setMessage(res.data.message);
          setShowModal(true);

          if (res.data.message === "Login Successfull ✅") {
            setTimeout(() => {
              navigate("/");
            }, 2000);
          }
        })
        .catch((err) => {
          console.log(err);
          setMessage(err?.response?.message || err.message);
          setShowModal(true);
          dispatch(loginFailure());
        });
    } else {
      setShowModal(true);
      setMessage("Please fill all the fields 📝");
    }
  };

  return (
    <>
      <div className="login">
        <form className="form" onSubmit={handleClick}>
          <h2 className="title">Login</h2>
          <div className="loginInputs">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <Link to="/signup" className="signupLink">
            Don't have an account?
          </Link>
          <button className="loginBtn" type="submit">
            Login
          </button>
        </form>
      </div>

      {showModal && <SideModal setShowModal={setShowModal} message={message} />}
    </>
  );
};

export default Login;
