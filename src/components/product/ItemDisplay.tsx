import { NavLink } from "react-router";
import { useProduct } from "@context/ProductContext";
import { useAspectClass } from "@utils/image/useAspectClass";
import { ItemType } from "@schema/index";

interface ItemProps extends Omit<ItemType, "description">{
    onClick: () => void;
}

function Item({ id, name, image, price, tags, onClick }: ItemProps) {
    const {
        aspectClass,
        setAspectClass,
        handleImageLoad,
    } = useAspectClass();

    return (
        <div className="item-container-size" key={id} onClick={onClick}>
            <div className="item-container">
                <div className="item-img-container-mobile md:item-img-container overflow-hidden bg-gray-200">
                    <img src={image} alt={name} onLoad={(event) =>  handleImageLoad(event, setAspectClass)} className={`item-img ${aspectClass} h-max object-scale-down`}></img>
                </div>
                <div className="flex flex-col justify-around border h-1/4 md:h-1/5">
                    <div className="item-title-container">
                        <h3>{name}</h3>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="item-tags-container-mobile md:item-tags-container">
                            <h3>{tags}</h3>
                        </div>
                        <div className="item-price-container-mobile md:item-price-container">
                            <h3>{`Rp ${price.toLocaleString("id-ID")}`}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ItemList({ items, loading }) {
    const { setSelectedProductId } = useProduct();

    if (loading) return <p>Loading...</p>

    const onItemClick = (item) => () => {
        setSelectedProductId(item);
    }

    return (
        <div className="item-generic-container">
            {
                items.map((item: ItemProps) => (
                    <NavLink to={`/product/${item.id}`} end>
                    <Item
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        tags={item.tags}
                        onClick={onItemClick(item.id)} 
                        />
                    </NavLink>
                ))
            }
        </div>
    );
};

export default ItemList;