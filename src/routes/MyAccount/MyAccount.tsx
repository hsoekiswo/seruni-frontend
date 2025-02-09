import { NavLink, Outlet } from "react-router";
import { Nav } from "../../components/Nav";
import Title from "../../components/Title";

function MyAccount() {
    const navLinkClass = ({ isActive }) => `nav-li ${isActive ? "nav-li-active" : ""}`

    return (
      <>
            <Nav />
            <div className="pt-20">
                <Title title="My Account" />
                <div className="account-generic-container">
                  <div className="w-3/4 min-h-32 min-h-1/5 max-h-fit border m-10 rounded-lg overflow-auto">
                    <div className="border-b-2 sticky top-0 bg-white oppacity-100">
                      <ul className="flex flex-row justify-around py-3">
                        <li>
                        <NavLink to="/my-account" end className={navLinkClass}>
                          Purchases
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="account-store" className={navLinkClass}>
                          Store
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="detailed-account" className={navLinkClass}>
                          Account
                        </NavLink>
                        </li>
                      </ul>
                    </div>
                    <Outlet />
                  </div>
                </div>
            </div>
      </>
    );
  }
  
export default MyAccount;