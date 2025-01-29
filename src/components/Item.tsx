const items = [
    {
        name: "Touch For Health - The Complete Edition",
        image: "https://devorss.com/cdn/shop/files/9780875169125_c039adc2-c6ee-4a20-86c1-4f35871552b9.jpg?v=1684360516&width=800",
    },
    {
        name: "Touch for Health Handy Assessment Chart",
        image: "https://devorss.com/cdn/shop/products/300_11x17-Handy-Assessment-Chart-proof-1.jpg?v=1659989315&width=300",
    }
]

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
    return (
        <div className="generic-container">
            {
                items.map((item) => (
                    <Item name={item.name} image={item.image} />
                ))
            }
        </div>
    )
}

export default ItemList;