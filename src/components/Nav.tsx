import { NavLink, useNavigate, useLocation } from "react-router";

export function Nav() {
    const location = useLocation();
    const navLinkClass = ({ isActive }) => `nav-li ${isActive ? "nav-li-active" : ""}`

    return (
      <nav className="flex flex-row items-center justify-center border pb-3 fixed top-0 left-0 w-full bg-white opacity-90"> 
          <div className="w-1/3">
            <img src="/assets/images/logo.png" className="h-16 pl-4" alt="Logo"></img>
          </div>
          <div className="w-1/3">
            <ul className="flex flex-row justify-between p-2 w-full text-lg font-semibold">
                <li>
                    <NavLink to="/" className={navLinkClass} end>
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className={navLinkClass} end>
                    Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/store" className={navLinkClass} end>
                    Store
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account" className={() => `nav-li ${location.pathname.startsWith("/my-account") ? "nav-li-active" : ""}`} end>
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
  
// export default Nav;
export function HomeNav() {
  return (
    <nav className="flex flex-row items-center justify-center border pb-3 fixed top-0 left-0 w-full bg-white opacity-90"> 
      <NavLink to="/" end>
        <div>
          <img src="/assets/images/logo.png" className="h-16 pl-4" alt="Logo"></img>
        </div>
      </NavLink>
    </nav>
  );
}

export function BackNav() {
  const navigate = useNavigate();

  return (
    <nav className="flex flex-row items-center justify-start border pl-2 py-3 fixed top-0 left-0 w-full bg-white opacity-90">
      <button onClick={() => {navigate(-1);}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
        </svg>
      </button>
    </nav>
  )
}