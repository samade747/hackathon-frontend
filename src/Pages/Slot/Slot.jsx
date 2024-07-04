import { Link } from "react-router-dom";
import "./Slot.css";

export default function Slot() {
  return (
    <>
      <div className="slot">
        <div className="slotTitleContainer">
          <h1 className="slotTitle">Edit Slot</h1>
          <Link to="/newslot">
            <button className="slotAddButton">Create</button>
          </Link>
        </div>
        <div className="slotContainer">
          <div className="slotShow">
            <div className="slotShowTop">
              <div className="slotShowTopTitle">
                <h2 className="slotShowslotname">Batch-10</h2>
              </div>
            </div>
            <div className="slotShowBottom">
              <span className="slotShowTitle">Details</span>
              <div className="slotShowInfo">
                <span className="slotShowInfoTitle">ID: 69</span>
              </div>
              <div className="slotShowInfo">
                <span className="slotShowInfoTitle">
                  Days: Monday , Wednesday , Friday
                </span>
              </div>
              <div className="slotShowInfo">
                <span className="slotShowInfoTitle">
                  Time: 10 to 12 PM
                </span>
              </div>
            </div>
          </div>
          <div className="slotUpdate">
            <span className="slotUpdateTitle">Edit</span>
            <form className="slotUpdateForm">
              <div className="slotUpdateLeft">
                <div className="slotUpdateItem">
                  <label>Course Name</label>
                  <select name="course" className="slotUpdateSelect">
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="CSE">CSE</option>
                  </select>
                </div>
                <div className="slotUpdateItem">
                  <label>Batch Number</label>
                  <input
                    type="number"
                    placeholder="10"
                    className="slotUpdateInput"
                  />
                </div>

                <div className="slotUpdateItem">
                  <label>Time</label>
                  <input
                    type="text"
                    placeholder="10 to 12 pm"
                    className="slotUpdateInput"
                  />
                </div>

                <div className="slotUpdateItem">
                  <label>Teacher Name</label>

                  <select name="teacher" className="slotUpdateSelect">
                    <option value="Muhammad Sufiyan">Muhammad Sufiyan</option>
                    <option value="Muhammad Ali">Muhammad Ali</option>
                  </select>
                </div>
              </div>
              <div className="slotUpdateRight">
                <button className="slotUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
