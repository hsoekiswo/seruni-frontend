import { NavLink, Outlet } from "react-router";
import { Nav } from "../../components/Nav";
import Title from "../../components/Title";

function MyAccount() {
    return (
      <>
            <Nav />
            <div className="pt-20">
                <Title title="My Account" />
                <div className="generic-container">
                  <div className="w-3/4 h-1/4 border m-10 rounded-lg">
                    <div className="border-b-2">
                      <ul className="flex flex-row justify-around py-3">
                        <li>
                        <NavLink to="/my-account" end className="hover:underline">
                          Purchases
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="account-store" className="hover:underline">
                          Store
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="detailed-account" className="hover:underline">
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