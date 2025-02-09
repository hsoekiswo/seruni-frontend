import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { useProduct } from "../../context/ProductContext";
import { fetchItems } from "../../services/productService";
import { handleImageLoad } from "../../utils/handleImageLoad";

interface ItemProps {
  id: string;
  name: string;
  image: string;
  price: number;
}

function ItemRow() {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [aspectClass, setAspectClass] = useState("");
  // const [loading, setLoading] = useState(true);
  const { setSelectedProductId } = useProduct();

  useEffect(() => {
    const getItems = async() => {
      try {
        const data = await fetchItems();
        setItems(data);
      } catch {
        alert("There was an error retrieving items");
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
                <div className="flex justify-center items-center">
                  <div className="flex justify-center items-center p-2 m-2 w-64 h-32">
                    <img
                      src={item.image}
                      onLoad={(event) => handleImageLoad(event, setAspectClass)}
                      className={`${aspectClass}`}
                    > 
                    </img>
                  </div>
                  <div className="p-2 m-2 w-full">
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
                    <NavLink to={`/product/edit/${item.id}`} end>
                    <button
                      className="text-custom-blue font-semibold"
                      onClick={() => {
                        setSelectedProductId(item.id);
                      }}
                    >
                      Edit
                    </button>
                    </NavLink>
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
        <div className="sticky top-12 bg-white oppacity-100">
          <div  className="px-4 py-2">
            <NavLink to={'/product/new'} end>
              <button className="w-full bg-custom-orange-3 text-white font-bold p-2 rounded-lg">
                Add New Item
              </button>
            </NavLink>
          </div>
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
        </div>
        <div className="h-fit">
          <table className="border w-full min-h-max">
            <thead className="bg-slate-500 text-white">
              <tr>
                <th className="py-2 w-1/6">ID</th>
                <th className="py-2 w-2/6">Product</th>
                <th className="py-2 w-1/6">Price</th>
                <th className="py-2 w-1/6">Action</th>
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
  