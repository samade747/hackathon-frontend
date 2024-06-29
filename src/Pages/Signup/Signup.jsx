import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import axios from "axios";
import { URL } from "../../Utils/url.js";
import { useDispatch } from "react-redux";
import {
  signupFailure,
  signupStart,
  signupSuccess,
} from "../../Redux/Slices/SignupUserSlice.jsx";
import SideModal from "../../Components/SideModal/SideModal.jsx";

const Signup = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const api = axios.create({
    baseURL: URL,
  });
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    if (firstName && lastName && email && password) {

      if (password.length < 7) {
        setShowModal(true);
        setMessage("Password must be at least 7 characters 🔒");
        return;
      }
      // create usesr obj
      const data = {
        firstName,
        lastName,
        email,
        password,
      };

      // signup start
      dispatch(signupStart());

      // hit an api
      await api
        .post("/auth/signup", data)
        .then((res) => {
          // checking response
          console.log(res.data);

          // signup success
          dispatch(signupSuccess(res.data));

          // set message
          setMessage(res.data.message);

          // navigate to otp
          if (res.data.message === "User Registartion Successful") {
            navigate("/otp");
          }
        })
        .catch((err) => {
          dispatch(signupFailure(err.response.data));
          setMessage(err.response.data.message);
          setShowModal(true);
          console.log(err);
        });
    } else {
      setShowModal(true);
      setMessage("Please fill all the fields 📝");
    }
  };

  return (
    <>
      <div className="signup">
        <form className="form" onSubmit={signup}>
          <h2 className="title">Signup</h2>
          <div className="signupInputs">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              style={{ marginRight: "10px" }}
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              style={{ marginLeft: "10px" }}
              type="text"
              placeholder="Last Name"
            />
          </div>
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
          <button className="signupBtn" type="submit">
            Signup
          </button>
        </form>
      </div>

      {showModal && <SideModal setShowModal={setShowModal} message={message} />}
    </>
  );
};

export default Signup;
