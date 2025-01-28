import { NavLink } from "react-router";

function Nav() {
    return (
      <nav className="flex flex-row items-center border pb-3"> 
          <div className="w-1/3">
            <img src="../../../public/assets/images/logo.png" className="h-16 pl-4" alt="Logo"></img>
          </div>
          <div className="w-1/3">
            <ul className="flex flex-row justify-between p-2 w-full">
                <li className="">
                    <NavLink to="/" end>
                    Home
                    </NavLink>
                </li>
                <li className="">
                    <NavLink to="/blog" end>
                    Blog
                    </NavLink>
                </li>
                <li className="">
                    <NavLink to="/store" end>
                    Store
                    </NavLink>
                </li>
                <li className="">
                    <NavLink to="/my-account" end>
                    My Account
                    </NavLink>
                </li>
            </ul>
          </div>
          <div className="w-1/3">
            <ul className="flex flex-row justify-end p-2 w-full">
                <li className="px-4">
                    <NavLink to="/login" end>
                    Login
                    </NavLink>
                </li>
                <li className="px-4">
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