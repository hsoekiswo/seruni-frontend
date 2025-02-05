import { Link } from "react-router";
import Title from "../../components/Title";
import { Nav } from "../../components/Nav";
import { useState, useEffect } from "react";
import { useProduct } from "../../context/ProductContext";

// const image = "https://devorss.com/cdn/shop/files/9780875169125_c039adc2-c6ee-4a20-86c1-4f35871552b9.jpg?v=1684360516&width=800";
// const name = "Touch For Health - The Complete Edition";
// const price = "Rp 300.000"

const URL = 'https://seruni-backend-production.up.railway.app';

function Product() {
    const { selectedProductId } = useProduct();
    const [data, setData] = useState({
      name: [],
      image: [],
      price: [],
      description: [],
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
    });


    function getCookie(name) {
      const cookies = document.cookie.split("; ");
      for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
      };
      return null;
    };

    const token = getCookie("token");

    const handleClick = () => {
      console.log(token);
    }

    return (
      <>
        <Nav />
        <div className="pt-20">
          <Title title='Store' />
          <div className="generic-container">
            <div className="w-1/2">
              <img src={data.image} className="item-img py-16 pl-16 pr-8"></img>
            </div>
            <div className="w-1/2 py-16 pr-16 pl-8">
              <h2>{data.name}</h2>
              <br/>
              <h3>{data.price}</h3>
              <br/>
              {token ? (
                <Link
                  to="/checkout"
                >
                  <button className="form-button rounded-full" onClick={handleClick}>Register / Login to Buy</button>
                </Link>
              ) : (
                <Link
                  to="/registration"
                >
                  <button className="form-button rounded-full" onClick={handleClick}>Register / Login to Buy</button>
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