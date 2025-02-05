// const items = [
//     {
//         name: "Touch For Health - The Complete Edition",
//         image: "https://devorss.com/cdn/shop/files/9780875169125_c039adc2-c6ee-4a20-86c1-4f35871552b9.jpg?v=1684360516&width=800",
//     },
//     {
//         name: "Touch for Health Handy Assessment Chart",
//         image: "https://devorss.com/cdn/shop/products/300_11x17-Handy-Assessment-Chart-proof-1.jpg?v=1659989315&width=300",
//     }
// ]
import { useEffect, useState } from "react";

const URL = 'https://seruni-backend-production.up.railway.app'

function Item({ name, image }) {
    return (
        <div className="item-container-size">
            <div className="item-container">
                <div className="item-img-container">
                    <img src={image} className="item-img"></img>
                </div>
                <div className="item-title-container">
                    <h3>{name}</h3>
                </div>
            </div>
        </div>
    )
}

function ItemList() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${URL}/products`);
                const data = await response.json();
                console.log(data);
                setItems(data);
            } catch (error) {
                console.error("Error", error);
                alert('There was an error during retrieving product.');
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    if (loading) return <p>Loading...</p>

    return (
        <div className="generic-container">
            {
                items.map((item) => (
                    <Item name={item.name} image={item.image} />
                ))
            }
        </div>
    );
};

export default ItemList;