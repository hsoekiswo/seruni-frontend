import { BackNav } from "../../components/Nav";
import Title from "../../components/Title";

function Checkout() {
    return (
      <>
          <BackNav />
          <div className="pt-20">
            <Title title="Checkout"/>
            <div className="min-h-screen p-6">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left - Form Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

                  <form className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="johndoe@example.com"
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="123 Main St, City, Country"
                      />
                    </div>

                    {/* Payment Method */}
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
                    <div className="flex justify-between text-gray-700">
                      <span>Item 1</span>
                      <span>$50</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Item 2</span>
                      <span>$30</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>$80</span>
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