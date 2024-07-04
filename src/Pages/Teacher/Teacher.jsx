import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PublishIcon from "@mui/icons-material/Publish";
import BadgeIcon from "@mui/icons-material/Badge";
import { Link } from "react-router-dom";
import "./teacher.css";

export default function Teacher() {
  return (
    <>
      <div className="teacher">
        <div className="teacherTitleContainer">
          <h1 className="teacherTitle">Edit teacher</h1>
          <Link to="/newteacher">
            <button className="teacherAddButton">Create</button>
          </Link>
        </div>
        <div className="teacherContainer">
          <div className="teacherShow">
            <div className="teacherShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="teacherShowImg"
              />
              <div className="teacherShowTopTitle">
                <span className="teacherShowteachername">Sufiyan</span>
                <span className="teacherShowteacherTitle">
                  Software Engineer
                </span>
              </div>
            </div>
            <div className="teacherShowBottom">
              <span className="teacherShowTitle">Details</span>
              <div className="teacherShowInfo">
                <PhoneAndroidIcon className="teacherShowIcon" />
                <span className="teacherShowInfoTitle">+1 123 456 67</span>
              </div>
              <div className="teacherShowInfo">
                <MailOutlineIcon className="teacherShowIcon" />
                <span className="teacherShowInfoTitle">
                  annabeck99@gmail.com
                </span>
              </div>
              <div className="teacherShowInfo">
                <BadgeIcon className="teacherShowIcon" />
                <span className="teacherShowInfoTitle">ID : 45</span>
              </div>
            </div>
          </div>
          <div className="teacherUpdate">
            <span className="teacherUpdateTitle">Edit</span>
            <form className="teacherUpdateForm">
              <div className="teacherUpdateLeft">
                <div className="teacherUpdateItem">
                  <label>teacher name</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="teacherUpdateInput"
                  />
                </div>
                <div className="teacherUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="teacherUpdateInput"
                  />
                </div>
                <div className="teacherUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="teacherUpdateInput"
                  />
                </div>
                <div className="teacherUpdateItem">
                  <label>TeacherOf</label>
                  <select name="course" className="teacherUpdateSelect">
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="Graphic Design">Graphic Design</option>
                  </select>
                </div>
              </div>
              <div className="teacherUpdateRight">
                <div className="teacherUpdateUpload">
                  <img
                    className="teacherUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <PublishIcon className="teacherUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="teacherUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
