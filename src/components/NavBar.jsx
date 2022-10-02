import './Navbar.css';

import { BiSearchAlt2 } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">MoviesLib</Link>
      </h2>
      <form>
        <input type="text" placeholder="Busque um filme" />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  )

}

export default NavBar