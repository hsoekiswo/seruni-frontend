import { BackNav } from "@components/shared/Nav";
import { getToken, decodeToken } from "@utils/auth/token";
import useDisplayItem from "@utils/display/useDisplayItem";

function Checkout() {
    const data = useDisplayItem();
    const token = getToken('token');
    const payload = decodeToken(token);

    return (
      <>
          <BackNav />
          <div className="pt-20">
          <h1 className="pr-2 text-xl text-center sm:text-2xl md:text-3xl">Checkout</h1>
            <div className="min-h-screen p-6">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

                  <form className="space-y-4">
                    <div>
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-input"
                        value={payload.name}
                      />
                    </div>

                    <div>
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="johndoe@example.com"
                      />
                    </div>

                    <div>
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="123 Main St, City, Country"
                      />
                    </div>

                    <div>
                      <label className="form-label">Payment Method</label>
                      <select className="form-options">
                        <option>Bank Transfer - Mandiri</option>
                        <option>Bank Transfer - Jago</option>
                        <option>QRIS</option>
                      </select>
                    </div>
                  </form>
                </div>

                {/* Right - Order Summary */}
                <div className="bg-white p-6 rounded-lg shadow-lg h-fit sticky top-6">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                  <div className="border-b pb-4 mb-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>{data.name}</span>
                      <span>{`Rp ${data.price.toLocaleString("id-ID")}`}</span>
                    </div>
                  </div>

                  <button className="form-button">
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
      </>
    );
  }
  
export default Checkout;