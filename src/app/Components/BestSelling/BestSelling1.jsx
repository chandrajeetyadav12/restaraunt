import Image from "next/image";
import Link from "next/link";

const BestSelling1 = () => {

    const foodItems = [
        {img:'/assets/img/dishes/naturalsandwich.png', title:'Natural Sandwich', content:'The registration fee', price:'₹30.00'},    
        {img:'/assets/img/dishes/regularberger.png', title:'Regular Berger', content:'The registration fee', price:'₹30.00'},    
        {img:'/assets/img/dishes/cheeseonionpizza.png', title:'Cheese Onion Pizza', content:'The registration fee', price:'120.00'},    
        {img:'/assets/img/dishes/classicpasta.png', title:'Classic Pasta', content:'The registration fee', price:'₹70.00'},    
        {img:'/assets/img/dishes/garlicbread.png', title:'Classic Garlic Bread', content:'The registration fee', price:'₹50.00'},    
      ]; 

    return (
        <section className="popular-dishes-section fix section-padding">
        <div className="popular-dishes-wrapper style1">
            <div className="shape1 d-none d-xxl-block"><Image src="/assets/img/shape/popularDishesShape1_1.png" alt="img" width={164} height={183}   />
            </div>
            <div className="shape2 float-bob-y d-none d-xxl-block"><Image src="/assets/img/shape/popularDishesShape1_2.png" alt="img" width={239} height={149}   /></div>
            <div className="container">
                <div className="title-area">
                    <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                    <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20}   />
                        POPULAR DISHES<Image className="ms-1"
                            src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20}   />
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                        Best selling Dishes
                    </h2>
                </div>
                <div className="dishes-card-wrap style1">
                {foodItems.map((item, i) => (
                    <div key={i} className="dishes-card style1 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="dishes-thumb">
                        <Image src={item.img} alt="img" width={158} height={158}   />
                        </div>
                        <Link href="/menu">
                            <h3>{item.title}</h3>
                        </Link>
                        <p>{item.content}</p>
                        <h6>{item.price}</h6>
                        <div className="social-profile">
                            <span className="plus-btn"> <Link href="/shop/wishlist"> <i className="bi bi-heart"></i></Link></span>
                            <ul>
                                <li><Link href="/shop/cart"><i className="bi bi-basket2"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="btn-wrapper  wow fadeInUp" data-wow-delay="0.9s">
                    <Link className="theme-btn" href="/menu2">VIEW ALL ITEM <i className="bi bi-arrow-right"></i></Link>
                </div>
            </div>
        </div>

    </section>

    );
};

export default BestSelling1;