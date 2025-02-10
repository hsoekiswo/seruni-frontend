import { getToken, decodeToken } from "../../utils/token";

function DetailedAccount() {
    const token = getToken('token');
    const payload = decodeToken(token);

    return (
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
)};
  
export default DetailedAccount;