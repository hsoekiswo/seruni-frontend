import { useEffect, useState } from "react";
import { useProduct } from "../context/ProductContext";
import { NavLink } from "react-router";
import { fetchItems } from "../services/productService";
import { handleImageLoad } from "../utils/handleImageLoad";

interface ItemProps {
    id: string;
    name: string;
    image: string;
    price: number;
    onClick: () => void;
}

function Item({ id, name, image, price, onClick }: ItemProps) {
    const [aspectClass, setAspectClass] = useState("");

    return (
        <div className="item item-container-size" key={id} onClick={onClick}>
            <div className="item-container">
                <div className="item-img-container">
                    <img src={image} alt={name} onLoad={(event) =>  handleImageLoad(event, setAspectClass)} className={`item-img ${aspectClass}`}></img>
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
    const [items, setItems] = useState<Pick<ItemProps, "id" | "name" | "image" | "price">[]>([]);
    const [loading, setLoading] = useState(true);
    const { setSelectedProductId } = useProduct();

    useEffect(() => {
        const getItems = async () => {
            try {
                const data = await fetchItems();
                setItems(data);
            } catch {
                alert("There was an error retrieving items");
            } finally {
                setLoading(false);
            }
        }

        getItems();
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