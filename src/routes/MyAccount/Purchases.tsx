import { NavLink } from "react-router";

function Purchases() {
    return (
      <div className="flex justify-between items-center border px-4 m-3">
        <div className="p-2">
          <p className="font-medium">
            No purchases yet
          </p>
        </div>
        <div className="p-2">
          <NavLink to="/store" end>
            <button className="border bg-custom-orange-3 text-white font-medium p-2 transition-colors hover:from-custom-orange-3 hover:to-custom-orange min-w-36 rounded-md">
              Browse Product
            </button>
          </NavLink>
        </div>
      </div>
)};
  
  export default Purchases;