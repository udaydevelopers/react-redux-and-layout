import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <ul>
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/courses">Manage Courses</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;