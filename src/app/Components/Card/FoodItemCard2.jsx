import Image from "next/image";

const FoodItemCard2 = ({ img, title, content, price }) => {
    return (
        <div className="single-menu-items border px-2 rounded-2 shadow-sm w-100">
            <div className="details d-flex align-items-center gap-2">
                <div className="menu-item-thumb"><Image src={img} alt="img" width={80} height={80} />
                </div>
                <div className="menu-content">
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
            </div>

            <h6 className="text-muted">Price:{price}</h6>
        </div>
    );
};

export default FoodItemCard2;