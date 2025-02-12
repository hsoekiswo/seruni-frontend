import { NavLink } from "react-router";
import { getToken, decodeToken } from "@utils/auth/token";

function DetailedAccount() {
    const token = getToken('token');
    const payload = decodeToken(token);

    return (
        <>
            {
                (payload) ? (
                    <div className="min-h-32 min-h-1/5 max-h-fit m-10 p-6 rounded-lg">
                        <form>
                            <label className="form-label">Username</label>
                            <input
                                type='text'
                                value={payload.username}
                                className="form-input bg-slate-100 text-slate-300"
                                disabled
                            ></input>
                            <label className="form-label">Name</label>
                            <input
                                type='text'
                                value={payload.name}
                                className="form-input"
                            ></input>
                            <label className="form-label">Address</label>
                            <input
                                type='text'
                                placeholder="123 Main St, City, Country"
                                className="form-input"
                            ></input>
                            <label className="form-label">Password</label>
                            <button className="border p-2 rounded-md bg-slate-300 text-white">
                                Change Password
                            </button>
                            <button className="form-button mt-10">
                                Save
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="flex justify-between items-center border px-4 m-3">
                        <div className="p-2">
                        <p className="font-medium">
                            You're not logged in
                        </p>
                        </div>
                        <div className="p-2">
                        <NavLink to="/login" end>
                            <button className="border bg-custom-orange-3 text-white font-medium p-2 transition-colors hover:from-custom-orange-3 hover:to-custom-orange min-w-36 rounded-md">
                                Log in
                            </button>
                        </NavLink>
                        </div>
                    </div>
                )
            }
        </>
)};
  
export default DetailedAccount;