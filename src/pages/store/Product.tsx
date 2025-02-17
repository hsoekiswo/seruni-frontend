import { Link, useParams } from "react-router";
import { Nav } from "@components/shared/Nav";
import { getToken } from "@utils/auth/token";
import useDisplayItem from "@utils/display/useDisplayItem";
import { useAspectClass } from "@utils/image/useAspectClass";

function Product() {
    const { id } = useParams();
    const data = useDisplayItem(id);
    const token = getToken("token");
    const {
      aspectClass,
      setAspectClass,
      handleImageLoad,
  } = useAspectClass();

    return (
      <>
        <Nav />
        <div className="pt-20">
          <div className="product-generic-container">
            <div className="item-container-2 my-6 md:my-16">
              <div className="flex items-center justify-center item-image-container-2 md:item-img-container-2 overflow-hidden bg-gray-200">
                <img src={data.image} onLoad={(event) =>  handleImageLoad(event, setAspectClass)} alt="Product Image" className={`item-img ${aspectClass} md:py-16`}></img>
              </div>
            </div>
            <div className="md:py-16 md:pr-16 lg:pl-8">
              <h2 className="text-xl md:text-3xl">{data.name}</h2>
              <br/>
              <h3>{`Rp ${data.price.toLocaleString("id-ID")}`}</h3>
              <br/>
              {token ? (
                <Link
                  to={`/checkout/${id}`}
                  state={data}
                >
                  <button className="form-button rounded-full">Buy Item</button>
                </Link>
              ) : (
                <Link
                  to="/registration"
                >
                  <button className="form-button rounded-full">Register / Login to Buy</button>
                </Link>
              )}
              <br/>
              <br/>
              <b>
                <p>Description</p>
              </b>
              <br/>
              <p>
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Product;