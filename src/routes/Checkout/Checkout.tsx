import { useProduct } from "../../context/ProductContext";
import { useState, useEffect } from "react";
import { ProductType } from "../../schema";
import { BackNav } from "../../components/Nav";
import Title from "../../components/Title";

const URL = 'https://seruni-backend-production.up.railway.app';

function Checkout() {
    const { selectedProductId } = useProduct();
    const [data, setData] = useState<ProductType>({
          name: '',
          image: '',
          price: 0,
          description: '',
    });
    
    useEffect(() => {
      const fetchItem = async() => {
        try {
          const response = await fetch(`${URL}/products/${selectedProductId}`);
          const result = await response.json();
          setData(result);
        }
        catch (error) {
          console.error("Error", error);
          alert('There was an error during retrieving item.');
        }
      };

      fetchItem();
    }, [selectedProductId]);

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