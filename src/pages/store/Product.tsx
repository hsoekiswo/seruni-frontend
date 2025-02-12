import { Link } from "react-router";
import Title from "@components/shared/Title";
import { Nav } from "@components/shared/Nav";
import { useState, useEffect } from "react";
import { useProduct } from "@context/ProductContext";
import { getToken } from "@utils/auth/token";

const URL = 'https://seruni-backend-production.up.railway.app';

interface ProductType {
  name: string;
  image: string;
  price: number;
  description: string;
}

function Product() {
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

    const token = getToken("token");

    return (
      <>
        <Nav />
        <div className="pt-20">
          <Title title='Store' />
          <div className="product-generic-container">
            <div className="w-1/2">
              <img src={data.image} alt="Product Image" className="item-img py-16 pl-16 pr-8"></img>
            </div>
            <div className="w-1/2 py-16 pr-16 pl-8">
              <h2>{data.name}</h2>
              <br/>
              <h3>{`Rp ${data.price.toLocaleString("id-ID")}`}</h3>
              <br/>
              {token ? (
                <Link
                  to="/checkout"
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