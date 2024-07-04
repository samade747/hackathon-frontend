import "./NewTeacher.css";

export default function NewTeacher() {
  return (
    <div className="newTeacher">
      <h1 className="newTeacherTitle">New Teacher</h1>
      <form className="newTeacherForm">
        <div className="newTeacherItemContainer">
          <div className="newTeacherItem">
            <label>Teachername</label>
            <input type="text" placeholder="john" />
          </div>
          <div className="newTeacherItem">
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" />
          </div>
          <div className="newTeacherItem">
            <label>Phone</label>
            <input type="text" placeholder="+1 123 456 78" />
          </div>
          <div className="newTeacherItem">
            <label>TeacherOF</label>
            <select name="course" className="newTeacherSelect">
              <option value="Web Development">Web Development</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Graphic Design">Graphic Design</option>
            </select>
          </div>
          <button className="newTeacherButton">Create</button>
        </div>
      </form>
    </div>
  );
}
