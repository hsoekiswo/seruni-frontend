import { NavLink } from "react-router";
import Search from "@components/search/Search";
import useDisplayItems from "@utils/display/useDisplayItems";
import ItemTableDisplay from "@components/product/ItemTableDisplay";

function AccountStore() {
  const {
    items,
    formData,
    setFormData,
    handleSearchSubmit,
  } = useDisplayItems();

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
            <Search
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleSearchSubmit}
            />
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
              <ItemTableDisplay
                items={items}
              />
            </tbody>
          </table>
        </div>
    </div>
)}
  
export default AccountStore;