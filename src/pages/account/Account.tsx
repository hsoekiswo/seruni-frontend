import { NavLink, Outlet } from "react-router";
import { Nav } from "@components/shared/Nav";
import { getToken, decodeToken } from "@utils/auth/token";

function MyAccount() {
    const navLinkClass = ({ isActive }) => `nav-li ${isActive ? "nav-li-active" : ""}`
    const token = getToken('token');
    const payload = decodeToken(token);

    return (
      <>
            <Nav />
            <div className="pt-20">
                <div className="account-generic-container">
                  <div className="w-full md:w-3/4 md:min-h-1/5 max-h-fit border mx-2 mt-10 md:m-10 rounded-lg overflow-auto">
                    <div className="border-b-2 sticky top-0 bg-white oppacity-100">
                      <ul className="flex flex-row justify-around py-3">
                        <li>
                        <NavLink to="/my-account" end className={navLinkClass}>
                          Purchases
                        </NavLink>
                        </li>
                        {
                          (payload?.role === 'admin') ? (
                            <li>
                            <NavLink to="account-store" className={navLinkClass}>
                              Store
                            </NavLink>
                            </li>
                          ) : (
                            <>
                            </>
                          )
                        }
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