import "./NewSlot.css";

export default function NewSlot() {
  return (
    <div className="newSlot">
      <h1 className="newSlotTitle">New Slot</h1>
      <form className="newSlotForm">
        <div className="newSlotItemContainer">
          <div className="newSlotItem">
            <label>Course Name</label>
            {/* <input type="" placeholder="Web Development" /> */}
            <select name="course" className="newSlotSelect">
              <option value="Web Development">Web Development</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Graphic Design">Graphic Design</option>
            </select>
          </div>
          <div className="newSlotItem">
            <label>Batch</label>
            <input type="number" placeholder="10" />
          </div>
          <div className="newSlotItem">
            <label>Time</label>
            <input type="text" placeholder="10 to 12 PM" />
          </div>
          <div className="newSlotItem">
            <label>Days</label>
            <input type="text" placeholder="Monday,Wednesday,Friday" />
          </div>
          <div className="newSlotItem">
            <label>Teacher-Name</label>
            {/* <input type="text" placeholder="45" /> */}
            <select name="teacher" className="newSlotSelect">
              <option value="sufiyan">Sufiyan</option>
              <option value="saad">Saad</option>
              <option value="muhammad ali">Muhammad Ali</option>
            </select>
          </div>
          <button className="newSlotButton">Create</button>
        </div>
      </form>
    </div>
  );
}
