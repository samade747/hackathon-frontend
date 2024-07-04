import "./NewBatch.css";

export default function NewBatch() {
  return (
    <div className="newBatch">
      <h1 className="newBatchTitle">New Batch</h1>
      <form className="newBatchForm">
        <div className="newBatchItemContainer">
          <div className="newBatchItem">
            <label>Course Name</label>
            <select name="course" className="newBatchSelect">
              <option value="Web Development">Web Development</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>
          <div className="newBatchItem">
            <label>Batch Number</label>
            <input type="text" placeholder="12" />
          </div>
          <div className="newBatchItem">
            <label>Started From</label>
            <input type="email" placeholder="jan 2023" />
          </div>
          <div className="newBatchItem">
            <label>Duration</label>
            <input type="text" placeholder="8 months" />
          </div>
          <button className="newBatchButton">Create</button>
        </div>
      </form>
    </div>
  );
}
