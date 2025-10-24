import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">خانه</Link> | <Link to="/users">کاربران</Link>
    </nav>
  );
}



