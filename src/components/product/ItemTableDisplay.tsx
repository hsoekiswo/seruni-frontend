import { Link } from "react-router";
import { useProduct } from "@context/ProductContext";
import { useAspectClass } from "@utils/image/useAspectClass";
import { deleteItem } from "@services/productService";

function ItemTableDisplay({ items, refreshItems }) {
  const {
      aspectClass,
      setAspectClass,
      handleImageLoad,
  } = useAspectClass();
  const { setSelectedProductId } = useProduct();

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      refreshItems();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

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
                    <Link to={`/products/edit/${item.id}`}>
                    <button
                      className="text-custom-blue font-semibold"
                      onClick={() => {
                        setSelectedProductId(item.id);
                      }}
                    >
                      Edit
                    </button>
                    </Link>
                  </div>
                  <div>
                    <button
                      className="text-red-600 font-semibold"
                      onClick={() => handleDelete(item.id)}
                      >
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
};

export default ItemTableDisplay;