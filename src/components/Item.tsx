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
import { useProduct } from "../context/ProductContext";
import { NavLink } from "react-router";

const URL = 'https://seruni-backend-production.up.railway.app'

interface ItemProps {
    id: string;
    name: string;
    image: string;
    price: number;
    onClick: () => void;
}

function Item({ id, name, image, price, onClick }: ItemProps) {
    const [aspectClass, setAspectClass] = useState("");

    const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
        const img = event.currentTarget;
        if (img.naturalWidth > img.naturalHeight) {
            setAspectClass("item-img-landscape");
        } else {
            setAspectClass("item-img-potrait");
        }
    }

    return (
        <div className="item item-container-size" key={id} onClick={onClick}>
            <div className="item-container">
                <div className="item-img-container">
                    <img src={image} alt={name} onLoad={handleImageLoad} className={`item-img ${aspectClass}`}></img>
                </div>
                <div className="h-1/5 flex flex-col items-stretch">
                    <div className="item-title-container">
                        <h3>{name}</h3>
                    </div>
                    <div className="item-price-container">
                        <h3>{`Rp ${price.toLocaleString("id-ID")}`}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ItemList() {
    const [items, setItems] = useState<Array<{id: string; name: string; image: string}>>([]);
    const [loading, setLoading] = useState(true);
    const { setSelectedProductId } = useProduct();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(`${URL}/products`);
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error("Error", error);
                alert('There was an error during retrieving products.');
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, [setItems]);

    if (loading) return <p>Loading...</p>

    return (
        <div className="item-generic-container">
            {
                items.map((item) => (
                    <NavLink to={`/product/${item.id}`} end>
                    <Item
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        onClick={() => {
                            setSelectedProductId(item.id);
                        }} />
                    </NavLink>
                ))
            }
        </div>
    );
};

export default ItemList;