import "./NewStudent.css";

export default function NewStudent() {
  return (
    <div className="NewStudent">
      <h1 className="NewStudentTitle">New Student</h1>
      <form className="NewStudentForm">
        <div>
          <div className="newStudentItem">
            <label>FullName</label>
            <input type="text" placeholder="Muhammad Haroon" />
          </div>
          <div className="newStudentItem">
            <label>Email</label>
            <input type="email" placeholder="123@gmail.com" />
          </div>
          <div className="newStudentItem">
            <label>Father Email</label>
            <input type="email" placeholder="father@gmail.com" />
          </div>
          <div className="newStudentItem">
            <label>phone Number</label>
            <input type="text" placeholder="+1 123 456 78" />
          </div>
          <div className="newStudentItem">
            <label>Course Name</label>
            <select name="course" className="newStudentSelect">
              <option value="Web Development">Web Development</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Graphic Design">Graphic Design</option>
            </select>
          </div>
          <div className="newStudentItem">
            <label>Batch</label>
            <input type="number" placeholder="10" />
          </div>
          <div className="newStudentItem">
            <label>Slot</label>
            <select name="slot" className="newStudentSelect">
              <option value="monday,wednesday,friday (6 to 9 pm )">
                monday,wednesday,friday (6 to 9 pm )
              </option>
              <option value="tuesday,thursday (6 to 9 pm )">
                tuesday,thursday (6 to 9 pm )
              </option>
              <option value="friday (6 to 9 pm )">friday (6 to 9 pm )</option>
            </select>
          </div>
        </div>

        <button className="NewStudentButton">Create</button>
      </form>
    </div>
  );
}
