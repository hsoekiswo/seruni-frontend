import { useEffect, useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { fetchItems } from "../../services/productService";

function ItemRow() {
  interface ItemProps {
    id: string;
    name: string;
    image: string;
    price: number;
  }

  const [items, setItems] = useState<ItemProps[]>([]);
  // const [loading, setLoading] = useState(true);
  // const { setSelectedProductId } = useProduct();

  useEffect(() => {
    const getItems = async() => {
      try {
        const data = await fetchItems();
        setItems(data);
      } catch {
        alert("There was an error retrieving items")
      } finally {
        // setLoading(false);
      }
    }

    getItems();
  }, [setItems]);

  return (
    <>
      {
        items.map((item) => (
          <tr className="border-y h-40">
              <td>
                {item.id}
              </td>
              <td>
                <div className="flex justify-center items-start">
                  <div className="p-2 m-2">
                    <img src={item.image} className="w-16"></img>
                  </div>
                  <div className="p-2 m-2">
                    {item.name}
                  </div>
                </div>
              </td>
              <td>
                {`Rp ${(item.price).toLocaleString("id-ID")}`}
              </td>
              <td>
                <div className="flex justify-around">
                  <div>
                    <button className="text-custom-blue font-semibold">
                      Edit
                    </button>
                  </div>
                  <div>
                    <button className="text-red-600 font-semibold">
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>
        ))
      }
    </>
  )
}

function AccountStore() {
  return (
    <div className="h-svh">
        <div className="px-4 py-2">
          Filter
          <form>
            <div className="flex">
              <div className="w-full mr-4">
                <label>
                  <input type="text" placeholder="Search" className="form-input">
                  </input>
                </label>
              </div>
              <div className="flex items-center justify-center w-2/12">
                <button type="submit" className="w-full bg-slate-500 text-white font-bold p-2 rounded-lg">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="overflow-scroll">
          <table className="border w-full">
            <thead className="bg-slate-500 text-white">
              <tr>
                <th className="py-2">ID</th>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <ItemRow />
            </tbody>
          </table>
        </div>
    </div>
)}
  
export default AccountStore;
  