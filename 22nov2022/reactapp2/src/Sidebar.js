import "./App.css";
function Sidebar() {
  return (
    <div className="col-sm-3 outline">
      <h2>About Me</h2>
      <h5>Photo of me:</h5>

      <h3 className="mt-4">Some Links</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
        <li className="nav-item"></li>
      </ul>
      <hr className="d-sm-none" />
    </div>
  );
}
export default Sidebar;
