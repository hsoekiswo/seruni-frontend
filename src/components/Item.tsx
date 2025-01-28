function Item() {
    return (
        <div className="w-sreen h-screen px-10 flex items-start justify-center">
            <div className="w-1/2 h-2/3">
                <div className="h-full my-10 mx-6 border rounded-md">
                    <div className="px-8 py-4 h-4/5 flex items-center justify-center">
                        <img src="https://devorss.com/cdn/shop/files/9780875169125_c039adc2-c6ee-4a20-86c1-4f35871552b9.jpg?v=1684360516&width=800"></img>
                    </div>
                    <div className="p-4 h-1/5 text-center">
                        <h3>Touch For Health - The Complete Edition</h3>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-2/3">
                <div className="h-full my-10 mx-6 border rounded-md">
                    <div className="px-8 py-4 h-4/5 flex items-center justify-center">
                        <img src="https://devorss.com/cdn/shop/products/300_11x17-Handy-Assessment-Chart-proof-1.jpg?v=1659989315&width=300"></img>
                    </div>
                    <div className="p-4 h-1/5 text-center">
                        <h3>Touch for Health Handy Assessment Chart</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;