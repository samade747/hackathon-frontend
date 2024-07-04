import "./App.css";
import Signup from "./Pages/Signup/Signup.jsx";
import Login from "./Pages/Login/Login.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Otp from "./Pages/Otp/Otp.jsx";
import { useSelector } from "react-redux";
import Home from "./Pages/Home/Home.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "./Redux/Slices/UserSlice.jsx";
import { URL } from "./Utils/url.js";
import TeacherList from "./Pages/TeacherList/TeacherList.jsx";
import Teacher from "./Pages/Teacher/Teacher.jsx";
import NewTeacher from "./Pages/NewTeacher/NewTeacher.jsx";
import NewStudent from "./Pages/NewStudent/NewStudent.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Topbar from "./Components/Topbar/Topbar.jsx";
import StudentList from "./Pages/StudentList/StudentList.jsx";
import Student from "./Pages/Student/Student.jsx";
import SlotsList from "./Pages/SlotsList/SlotsList.jsx";
import Slot from "./Pages/Slot/Slot.jsx";
import NewSlot from "./Pages/NewSlot/NewSlot.jsx";
import BatchList from "./Pages/BatchList/BatchList.jsx";
import NewBatch from "./Pages/NewBatch/NewBatch.jsx";
import Batch from "./Pages/Batch/Batch.jsx";

const api = axios.create({
  baseURL: URL,
});

function App() {
  const user = useSelector((state) => state.user.currentUser); // Spelling corrected
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    const isUserLoggedIn = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      if (!token) {
        dispatch(loginFailure());
        console.log("no token");
        return;
      }

      dispatch(loginStart());

      try {
        const res = await api.get("/auth/isuserloggedin", {
          headers: { authorization: `Bearer ${token}` }, // Corrected the template literal
        });
        if (res.data) {
          console.log(res.data);
          dispatch(loginSuccess(res.data.data));
        }
      } catch (error) {
        console.log(error);
        dispatch(loginFailure(error));
      }
    };

    isUserLoggedIn();
  }, [dispatch]);

  const signedupUser = useSelector((state) => state.SignupUserSlice.user);
  return (
    <BrowserRouter>
      <Topbar open={open} toggleDrawer={toggleDrawer} />
      <div className="container">
        <Sidebar open={open} toggleDrawer={toggleDrawer} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/slots" element={<SlotsList />} />
          <Route path="/batches" element={<BatchList />} />
          <Route path="/newstudent" element={<NewStudent />} />
          <Route path="/newteacher" element={<NewTeacher />} />
          <Route path="/newbatch" element={<NewBatch />} />
          <Route path="/newslot" element={<NewSlot />} />
          <Route path="/teacher/:teacherId" element={<Teacher />} />
          <Route path="/student/:studentId" element={<Student />} />
          <Route path="/slots/:slotId" element={<Slot />} />
          <Route path="/batch/:slotId" element={<Batch />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={!user && <Login />} />
          <Route path="/signup" element={!user && <Signup />} />
          <Route path="/otp" element={!user && <Otp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
