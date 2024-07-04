import { Link } from "react-router-dom";
import "./Batch.css";

export default function Batch() {
  return (
    <>
      <div className="batch">
        <div className="batchTitleContainer">
          <h1 className="batchTitle">Edit Batch</h1>
          <Link to="/newbatch">
            <button className="batchAddButton">Create</button>
          </Link>
        </div>
        <div className="batchContainer">
          <div className="batchShow">
            <div className="batchShowTop">
              <div className="batchShowTopTitle">
                <h2 className="batchShowbatchname">Details</h2>
              </div>
            </div>
            <div className="batchShowBottom">
              <div className="batchShowInfo">
                <span className="batchShowInfoTitle">
                  Course: Web Development
                </span>
              </div>
              <div className="batchShowInfo">
                <span className="batchShowInfoTitle">Batch Number: 10</span>
              </div>
              <div className="batchShowInfo">
                <span className="batchShowInfoTitle">Total Slots: 10</span>
              </div>
              <div className="batchShowInfo">
                <span className="batchShowInfoTitle">
                  Started From: july 2023
                </span>
              </div>
              <div className="batchShowInfo">
                <span className="batchShowInfoTitle">Duration: 10 Months</span>
              </div>
            </div>
          </div>
          <div className="batchUpdate">
            <span className="batchUpdateTitle">Edit</span>
            <form className="batchUpdateForm">
              <div className="batchUpdateLeft">
                <div className="batchUpdateItem">
                  <label>Course Name</label>
                  <select name="course" className="batchUpdateSelect">
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                </div>
                <div className="batchUpdateItem">
                  <label>Batch Number</label>
                  <input
                    type="text"
                    placeholder="10"
                    className="batchUpdateInput"
                  />
                </div>
                <div className="batchUpdateItem">
                  <label>Started From</label>
                  <input
                    type="text"
                    placeholder="feb 2023"
                    className="batchUpdateInput"
                  />
                </div>
                <div className="batchUpdateItem">
                  <label>Duration</label>
                  <input
                    type="text"
                    placeholder="10 months"
                    className="batchUpdateInput"
                  />
                </div>
              </div>
              <div className="batchUpdateRight">
                <button className="batchUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
