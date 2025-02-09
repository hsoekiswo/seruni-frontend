import { NavLink } from "react-router";

export function Nav() {
    return (
      <nav className="flex flex-row items-center justify-center border pb-3 fixed top-0 left-0 w-full bg-white opacity-90"> 
          <div className="w-1/3">
            <img src="/assets/images/logo.png" className="h-16 pl-4" alt="Logo"></img>
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
  return (
    <nav className="flex flex-row items-center justify-start border pl-2 py-3 fixed top-0 left-0 w-full bg-white opacity-90">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
      </svg>
    </nav>
  )
}