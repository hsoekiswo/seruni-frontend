import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router";
import { getToken, decodeToken, removeToken } from "@utils/auth/token";
import { Menu, X } from 'lucide-react';

interface LogOutModalProps {
  LogoutModal: React.FC<{ isOpen: boolean}>
  isOpen: boolean;
}

const LogOutModal = ({isOpen}: LogOutModalProps) => {
  if (!isOpen) return null;

  return (
    <div>
      <button
        onClick={removeToken}
        className="font-light text-sm text-red-500"
      >
        Log out
      </button>
    </div>
  );
};

export function Nav() {
    const [isLogOut, setIsLogOut] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLogOut = () => setIsLogOut((prev) => !prev);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const location = useLocation();
    const navLinkClass = ({ isActive }) => `nav-li ${isActive ? "nav-li-active" : ""}`

    const token = getToken("token");
    const payload = decodeToken(token);

    return (
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
          <div className="container mx-auto flex justify-between items-center p-4">
            <div>
              <NavLink to="/" end>
                <img src="/assets/images/logo.png" className="h-12" alt="Logo"></img>
              </NavLink>
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <ul className="hidden md:flex space-x-6 text-lg font-semibold">
                <li>
                    <NavLink to="/" className={navLinkClass} end>
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={navLinkClass} end>
                    About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={navLinkClass} end>
                    Store
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account" className={() => `nav-li ${location.pathname.startsWith("/my-account") ? "nav-li-active" : ""}`} end>
                    My Account
                    </NavLink>
                </li>
            </ul>
            <div className="hidden md:flex items-center space-x-4">
              {
                token ? (
                    <div className="relative">
                      <button className="pt-1 text-xs" onClick={toggleLogOut}>
                        {`Logged in as, ${payload.name}`}
                      </button>
                    <LogOutModal isOpen={isLogOut} LogoutModal={undefined} />
                  </div>
                ) : (
                  <ul className="flex space-x-4">
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
                )
              }
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {
            isMenuOpen && (
              <div className="md:hidden bg-white shadow-md">
                <ul className="flex flex-col items-center space-y-4 p-4">
                  <li><NavLink to="/" className={navLinkClass} end onClick={toggleMenu}>Home</NavLink></li>
                  <li><NavLink to="/about" className={navLinkClass} end onClick={toggleMenu}>About</NavLink></li>
                  <li><NavLink to="/products" className={navLinkClass} end onClick={toggleMenu}>Store</NavLink></li>
                  <li><NavLink to="/my-account" className={navLinkClass} end onClick={toggleMenu}>My Account</NavLink></li>
                  {
                    token ? (
                      <button onClick={removeToken} className="text-sm text-red-500">
                        Log out
                      </button>
                    ) : (
                      <>
                      <li><NavLink to="/login" end onClick={toggleMenu}>Login</NavLink></li>
                      <li><NavLink to="/registration" end onClick={toggleMenu}>Sign Up</NavLink></li>
                      </>
                    )}
                </ul>
              </div>
            )}
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