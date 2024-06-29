import "./otp.css";
import axios from "axios";
import { URL } from "../../Utils/url.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../Redux/Slices/UserSlice.jsx";
import { useState } from "react";
import SideModal from "../../Components/SideModal/SideModal.jsx";

const api = axios.create({
  baseURL: URL,
});

const Otp = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [otp, setOtp] = useState("");
  const signedupUser = useSelector(
    (state) => state.SignupUserSlice.currentUser
  );
  console.log(signedupUser);

  const handleClick = async (e) => {
    e.preventDefault();

    api
      .post(
        "/auth/verifyEmail",
        {
          otp: otp,
          user: signedupUser?.data ? signedupUser.data : "",
        },
        {
          headers: {
            authorization: `Bearer ${signedupUser?.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);

        setMessage(res.data.message);
        dispatch(loginSuccess(res.data.data));
        const setToken = localStorage.setItem(
          "token",
          JSON.stringify(res.data.token)
        );

        setShowModal(true);

        if (res.data.message === "Email Verified Successfully ✅") {
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response?.data?.message);
        setShowModal(true);
      });
  };

  return (
    <form className="otp" onSubmit={handleClick}>
      <h1 className="otpTitle">OTP VERIFICATION</h1>
      <input
        type="text"
        className="otpInput"
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter otp"
      />
      <button className="otpBtn" type="submit">
        Submit
      </button>

      {showModal ? (
        <SideModal setShowModal={setShowModal} message={message} />
      ) : null}
    </form>
  );
};

export default Otp;
