import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PublishIcon from "@mui/icons-material/Publish";
import BadgeIcon from "@mui/icons-material/Badge";
import { Link } from "react-router-dom";
import "./Student.css";

export default function Student() {
  return (
    <>
      <div className="student">
        <div className="studentTitleContainer">
          <h1 className="studentTitle">Edit student</h1>
          <Link to="/newstudent">
            <button className="studentAddButton">Create</button>
          </Link>
        </div>
        <div className="studentContainer">
          <div className="studentShow">
            <div className="studentShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="studentShowImg"
              />
              <div className="studentShowTopTitle">
                <span className="studentShowstudentname">Anna Becker</span>
                <span className="studentShowstudentTitle">Batch-10</span>
              </div>
            </div>
            <div className="studentShowBottom">
              <span className="studentShowTitle">Details</span>
              <div className="studentShowInfo">
                <PhoneAndroidIcon className="studentShowIcon" />
                <span className="studentShowInfoTitle">+1 123 456 67</span>
              </div>
              <div className="studentShowInfo">
                <MailOutlineIcon className="studentShowIcon" />
                <span className="studentShowInfoTitle">
                  annabeck99@gmail.com
                </span>
              </div>
              <div className="teacherShowInfo">
                <BadgeIcon className="teacherShowIcon" />
                <span className="teacherShowInfoTitle">ID : 456613</span>
              </div>
            </div>
          </div>
          <div className="studentUpdate">
            <span className="studentUpdateTitle">Edit</span>
            <form className="studentUpdateForm">
              <div className="studentUpdateLeft">
                <div className="studentUpdateItem">
                  <label>FullName</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="studentUpdateInput"
                  />
                </div>
                <div className="studentUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="studentUpdateInput"
                  />
                </div>
                <div className="studentUpdateItem">
                  <label>Father Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="studentUpdateInput"
                  />
                </div>
                <div className="studentUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="studentUpdateInput"
                  />
                </div>
                <div className="studentUpdateItem">
                  <label>Course Name</label>
                  <select name="course" className="studentUpdateSelect">
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="Graphic Design">Graphic Design</option>
                  </select>
                </div>
                <div className="studentUpdateItem">
                  <label>Batch</label>
                  <input
                    type="number"
                    placeholder="10"
                    className="studentUpdateInput"
                  />
                </div>
                <div className="studentUpdateItem">
                  <label>Slot</label>
                  <select name="slot" className="studentUpdateSelect">
                    <option value="monday,wednesday,friday (6 to 9 pm)">
                      monday,wednesday,friday (6 to 9 pm)
                    </option>
                    <option value="tuesday,thursday,saturday (6 to 9 pm)">
                      tuesday,thursday,saturday (6 to 9 pm)
                    </option>
                    <option value="sunday (6 to 9 pm)">
                      sunday (6 to 9 pm)
                    </option>
                  </select>
                </div>
              </div>
              <div className="studentUpdateRight">
                <div className="studentUpdateUpload">
                  <img
                    className="studentUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <PublishIcon className="studentUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="studentUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
