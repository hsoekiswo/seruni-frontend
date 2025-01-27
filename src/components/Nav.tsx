import { NavLink } from "react-router";

function Nav() {
    return (
      <nav> 
          <div>
            <img src="../../../public/assets/images/logo.png" alt="Logo"></img>
          </div>
          <div>
            <ul>
                <li>
                    <NavLink to="/" end>
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blog" end>
                    Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/store" end>
                    Store
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account" end>
                    My Account
                    </NavLink>
                </li>
            </ul>
          </div>
          <div>
            <ul>
                <li>
                    <NavLink to="/login" end>
                    Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/registration" end>
                    Sign Up
                    </NavLink>
                </li>
            </ul>
          </div>
      </nav>
    );
  }
  
export default Nav;