"use client"
import { useState } from "react";
import FoodItemCard from "../Card/FoodItemCard";
import Image from "next/image";

const FoodItem1 = () => {
    const [isActive, setIsActive] = useState('FastFood');
    return (
        <section className="food-menu-section fix section-padding">
            <div className="burger-shape">
                <Image src="/assets/img/shape/burger-shape.png" alt="img" width={148} height={160} />
            </div>
            <div className="fry-shape">
                <Image src="/assets/img/shape/fry-shape.png" alt="img" width={137} height={158} />
            </div>
            <div className="food-menu-wrapper style1">
                <div className="container">
                    <div className="food-menu-tab-wrapper style-bg">
                        <div className="title-area">
                            <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                                <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20} />
                                FOOD MENU<Image className="ms-1"
                                    src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20} />
                            </div>
                            <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                                Ambrosia Starbuds  Foods Menu
                            </h2>
                        </div>

                        <div className="food-menu-tab">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className={`nav-item ${isActive === 'FastFood' ? 'active' : ''}`} onClick={() => setIsActive('FastFood')} role="presentation">
                                    <button className="nav-link" id="pills-FastFood-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-FastFood" type="button" role="tab"
                                        aria-controls="pills-FastFood" aria-selected="true"><Image src="/assets/img/menu/fastfood.png" alt="img" width={36} height={36} />Fast Food</button>
                                </li>
                                <li className={`nav-item ${isActive === 'DrinkJuice' ? 'active' : ''}`} onClick={() => setIsActive('DrinkJuice')} role="presentation">
                                    <button className="nav-link" id="pills-drinkJuice-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-drinkJuice" type="button" role="tab"
                                        aria-controls="pills-drinkJuice" aria-selected="false"><Image src="/assets/img/menu/drinkjuice.png" alt="img" width={36} height={36} />Drink & Juice</button>
                                </li>
                                {/* <li className={`nav-item ${isActive === 'ChickenPizza' ? 'active' : ''}`} onClick={() => setIsActive('ChickenPizza')} role="presentation">
                                <button className="nav-link" id="pills-chickenPizza-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-chickenPizza" type="button" role="tab"
                                    aria-controls="pills-chickenPizza" aria-selected="false"><Image src="/assets/img/menu/chickenpizza.png" alt="img" width={36} height={36}   />Chicken Pizza</button>
                            </li> */}
                                <li className={`nav-item ${isActive === 'FreshPasta' ? 'active' : ''}`} onClick={() => setIsActive('FreshPasta')} role="presentation">
                                    <button className="nav-link" id="pills-freshPasta-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-freshPasta" type="button" role="tab"
                                        aria-controls="pills-freshPasta" aria-selected="false"><Image src="/assets/img/menu/freshpasta.png" alt="img" width={36} height={36} />Pasta and French Fries</button>
                                </li>
                                <li className={`nav-item ${isActive === 'SouthIndian' ? 'active' : ''}`} onClick={() => setIsActive('SouthIndian')} role="presentation">
                                    <button className="nav-link" id="pills-freshPasta-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-SouthIndian" type="button" role="tab"
                                        aria-controls="pills-SouthIndian" aria-selected="false"><Image src="/assets/img/menu/paperdosa.png" alt="img" width={36} height={36} />South Indain</button>
                                </li>
                                 <li className={`nav-item ${isActive === 'IndianSnacks' ? 'active' : ''}`} onClick={() => setIsActive('IndianSnacks')} role="presentation">
                                    <button className="nav-link" id="pills-freshPasta-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-IndianSnacks" type="button" role="tab"
                                        aria-controls="pills-IndianSnacks" aria-selected="false"><Image src="/assets/img/menu/masaladosa.png" alt="img" width={36} height={36} />Indain Snacks</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className={`tab-pane ${isActive === 'FastFood' ? 'active' : ''}`} id="pills-FastFood" role="tabpanel"
                                    aria-labelledby="pills-FastFood-tab" tabIndex="0">
                                    <div className="row gx-60">
                                        <div className="col-lg-6">
                                            <FoodItemCard
                                                img="/assets/img/menu/cheeseonionpizza.png"
                                                title="Cheese Onion Pizza"
                                                content="Fresh Dough Pizza."
                                                price="₹79.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/cheescornpizza.png"
                                                title="Cheese corn pizza"
                                                content="Fresh Dough Pizza."
                                                price="₹79.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/cheesetomatopizza.png"
                                                title="Cheese tomato pizza"
                                                content="Fresh Dough Pizza."
                                                price="₹79.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/cheeseonionpizza.png"
                                                title="Cheese Onion "
                                                content="( Loaded Cheese +Fresh Onion ) small"
                                                price="₹120.00"
                                            >
                                            </FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/cheeseonionpizza.png"
                                                title="Cheese Onion "
                                                content="( Loaded Cheese +Fresh Onion ) medium."
                                                price="₹180.00"
                                            >
                                            </FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/cheeseonionpizza.png"
                                                title="Cheese Onion "
                                                content="( Loaded Cheese +Fresh Onion ) large"
                                                price="₹250.00"
                                            >
                                            </FoodItemCard>

                                            <FoodItemCard
                                                img="/assets/img/menu/cheescornpizza.png"
                                                title="Cheese corn pizza"
                                                content="( Loaded Cheese + Golden Corn ) small"
                                                price="₹120.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/cheescornpizza.png"
                                                title="Cheese corn pizza"
                                                content="( Loaded Cheese + Golden Corn ) medium"
                                                price="₹180.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/cheescornpizza.png"
                                                title="Cheese corn pizza"
                                                content="( Loaded Cheese + Golden Corn ) large"
                                                price="₹250.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/vegieeFreshPizza.png"
                                                title="Veggie Fresh Pizza"
                                                content="( Loaded Cheese + Fresh Tomato + Capsicum)small"
                                                price="₹130.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/vegieeFreshPizza.png"
                                                title="Veggie Fresh Pizza"
                                                content="( Loaded Cheese + Fresh Tomato + Capsicum) medium"
                                                price="₹200.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/vegieeFreshPizza.png"
                                                title="Veggie Fresh Pizza"
                                                content="( Loaded Cheese + Fresh Tomato + Capsicum) large"
                                                price="₹260.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/marghretiapizza.png"
                                                title="Margherita Fresh Pizza"
                                                content="( Cheese Classic) small"
                                                price="₹130.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/marghretiapizza.png"
                                                title="Margherita Fresh Pizza"
                                                content="(Cheese Classic) medium"
                                                price="₹200.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/marghretiapizza.png"
                                                title="Margherita Fresh Pizza"
                                                content="(Cheese Classic) large"
                                                price="₹300.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/marghretiaCheesepizza.png"
                                                title="Margherita Fresh Pizza"
                                                content="Fully Loaded With Extra Cheese small"
                                                price="₹150.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/marghretiaCheesepizza.png"
                                                title="Margherita Fresh Pizza"
                                                content="Fully Loaded With Extra Cheese medium"
                                                price="₹250.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/marghretiaCheesepizza.png"
                                                title="Margherita Fresh Pizza"
                                                content="Fully Loaded With Extra Cheese large"
                                                price="₹350.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/farmfreshpizza.png"
                                                title="Farm  Fresh Pizza"
                                                content="(Loaded Cheese + Fresh Capsicum + Crisp Onion + Fresh Tomato +Fresh Mushroom ) small"
                                                price="₹160.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/farmfreshpizza.png"
                                                title="Farm  Fresh Pizza"
                                                content="(Loaded Cheese + Fresh Capsicum + Crisp Onion + Fresh Tomato +Fresh Mushroom ) medium"
                                                price="₹260.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/farmfreshpizza.png"
                                                title="Farm  Fresh Pizza"
                                                content="(Loaded Cheese + Fresh Capsicum + Crisp Onion + Fresh Tomato +Fresh Mushroom ) large"
                                                price="₹360.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/mexicanpizza.png"
                                                title="Mexican Pizza"
                                                content="(Loaded Cheese +Jalapeno + Black Olive + Red Paprica + Baby Corn ) small"
                                                price="₹160.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/mexicanpizza.png"
                                                title="Mexican Pizza"
                                                content="(Loaded Cheese +Jalapeno + Black Olive + Red Paprica + Baby Corn ) medium"
                                                price="₹260.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/mexicanpizza.png"
                                                title="Mexican Pizza"
                                                content="(Loaded Cheese +Jalapeno + Black Olive + Red Paprica + Baby Corn ) large"
                                                price="₹360.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/paneeroniopizza.png"
                                                title="Paneer Onion Pizza"
                                                content="( Loaded Cheese + Paneer + Onion ) small"
                                                price="₹160.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/paneeroniopizza.png"
                                                title="Paneer Onion Pizza"
                                                content="( Loaded Cheese + Paneer + Onion ) medium"
                                                price="₹260.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/paneeroniopizza.png"
                                                title="Paneer Onion Pizza"
                                                content="( Loaded Cheese + Paneer + Onion ) large"
                                                price="₹360.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/tandooripannerpizza.png"
                                                title="Tandoori Paneer Pizza"
                                                content="( Loaded Cheese + Tandoori Paneer + Capsicum + Red Peprica ) small"
                                                price="₹180.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/tandooripannerpizza.png"
                                                title="Tandoori Paneer Pizza"
                                                content="( Loaded Cheese + Tandoori Paneer + Capsicum + Red Peprica ) medium"
                                                price="₹280.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/tandooripannerpizza.png"
                                                title="Tandoori Paneer Pizza"
                                                content="( Loaded Cheese + Tandoori Paneer + Capsicum + Red Peprica ) large"
                                                price="₹380.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/pannertikkapizza.png"
                                                title="Paneer Tikka Pizza"
                                                content="( Loaded Cheese + Paneer Tikka + Onion + Capsicum +Red Paprica ) small"
                                                price="₹180.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/pannertikkapizza.png"
                                                title="Paneer Tikka Pizza"
                                                content="( Loaded Cheese + Paneer Tikka + Onion + Capsicum +Red Paprica ) medium"
                                                price="₹280.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/pannertikkapizza.png"
                                                title="Paneer Tikka Pizza"
                                                content="( Loaded Cheese + Paneer Tikka + Onion + Capsicum +Red Paprica ) large"
                                                price="₹380.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/pepperpizza.png"
                                                title="5 Pepper Pizza"
                                                content="( Loaded Cheese + Paneer Tikka + Onion + Capsicum +Red Paprica ) small"
                                                price="₹200.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/pepperpizza.png"
                                                title="5 Pepper Pizza"
                                                content="( Loaded Cheese + Paneer Tikka + Onion + Capsicum +Red Paprica ) medium"
                                                price="₹300.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/pepperpizza.png"
                                                title="5 Pepper Pizza"
                                                content="( Loaded Cheese + Paneer Tikka + Onion + Capsicum +Red Paprica ) large"
                                                price="400.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/chefvegpizza.png"
                                                title="Chef's Veg Wonder"
                                                content="(Mushroom + Jalapeno + Babycorn + Capsicum + Paneer+ Red Paprica ) small"
                                                price="220.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/chefvegpizza.png"
                                                title="Chef's Veg Wonder"
                                                content="(Mushroom + Jalapeno + Babycorn + Capsicum + Paneer+ Red Paprica ) medium"
                                                price="320.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/chefvegpizza.png"
                                                title="Chef's Veg Wonder"
                                                content="(Mushroom + Jalapeno + Babycorn + Capsicum + Paneer+ Red Paprica ) large"
                                                price="420.00"
                                            ></FoodItemCard>


                                        </div>
                                        <div className="col-lg-6">

                                            <FoodItemCard
                                                img="/assets/img/menu/garlicbread.png"
                                                title="Classic Garlic Bread"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/cheesgarlic.png"
                                                title="Cheese Garlic Bread"
                                                content="It's a testament to our."
                                                price="₹60.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/garlicbread.png"
                                                title="Exotic Garlic Bread"
                                                content="It's a testament to our."
                                                price="₹70.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/pannergarlicbread.png"
                                                title="Paneer Tikka Garlic Bread"
                                                content="It's a testament to our."
                                                price="₹80.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/pannergarlicbread.png"
                                                title="Regular Burger"
                                                content="It's a testament to our."
                                                price="₹30.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/vegberger.png"
                                                title="Veg. Burger"
                                                content="It's a testament to our."
                                                price="₹40.00"
                                            ></FoodItemCard>

                                            <FoodItemCard
                                                img="/assets/img/menu/cheeseberger.png"
                                                title="Veg Cheese Burger"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/pannerberger.png"
                                                title="Veg Paneer Burger"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/tikkicheeseberger.png"
                                                title="Double Tikki Cheese Burger"
                                                content="It's a testament to our."
                                                price="₹60.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/tikkicheeseberger.png"
                                                title="Italian Cheese Burger"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/tikkicheeseberger.png"
                                                title="Mexican Cheese Burger"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/tikkicheeseberger.png"
                                                title="Tandoori Cheese Burger"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Natural Sandwich(Non Grill)"
                                                content="It's a testament to our."
                                                price="₹30.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Natural Sandwich(Grill)"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Veg Masala Sandwich(Non Grill)"
                                                content="It's a testament to our."
                                                price="₹40.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Veg Masala Sandwich(Grill)"
                                                content="It's a testament to our."
                                                price="₹60.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Veg Cheese Masala Sandwich(Non Grill)"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Veg Cheese Masala Sandwich(Grill)"
                                                content="It's a testament to our."
                                                price="₹70.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Veg Paneer Masala Sandwich(Non Grill)"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Veg Paneer Masala Sandwich(  Grill)"
                                                content="It's a testament to our."
                                                price="₹70.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Tandoori Masala Sandwich(Non Grill)"
                                                content="It's a testament to our."
                                                price="₹40.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Tandoori Masala Sandwich(Grill)"
                                                content="It's a testament to our."
                                                price="₹60.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Tandoori Cheese Masala(Non Grill)"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Tandoori Cheese Masala(Grill)"
                                                content="It's a testament to our."
                                                price="₹70.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Veg Club Sandwich(Non Grill)"
                                                content="It's a testament to our."
                                                price="₹60.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Veg Club Sandwich(Grill)"
                                                content="It's a testament to our."
                                                price="₹80.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Veg Club Cheese Sandwich(Non Grill)"
                                                content="It's a testament to our."
                                                price="₹70.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Veg Club Cheese Sandwich(Grill)"
                                                content="It's a testament to our."
                                                price="₹100.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Veg Club Paneer Sandwich(Non Grill)"
                                                content="It's a testament to our."
                                                price="₹70.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Veg Club Paneer Sandwich(Grill)"
                                                content="It's a testament to our."
                                                price="₹100.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="IItalian Club Cheese Sandwich(Non Grill)"
                                                content="It's a testament to our."
                                                price="₹70.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="IItalian Club Cheese Sandwich(Grill)"
                                                content="It's a testament to our."
                                                price="₹100.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Multigrain Veg Masala Sandwich(Non Grill)"
                                                content="It's a testament to our."
                                                price="₹75.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Multigrain Veg Masala Sandwich(Grill)"
                                                content="It's a testament to our."
                                                price="₹110.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Multigrain Veg Cheese Sandwich(Non Grill)"
                                                content="It's a testament to our."
                                                price="₹85.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/grilsandwhich.png"
                                                title="Multigrain Veg Cheese Sandwich(Grill)"
                                                content="It's a testament to our."
                                                price="₹120.00"
                                            ></FoodItemCard>

                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${isActive === 'DrinkJuice' ? 'active' : ''}`} id="pills-drinkJuice" role="tabpanel"
                                    aria-labelledby="pills-drinkJuice-tab" tabIndex="0">
                                    <div className="row gx-30">
                                        <div className="col-lg-6">

                                            <FoodItemCard
                                                img="/assets/img/menu/classicmojito.png"
                                                title="Classic Mojito"
                                                content="It's a testament to our."
                                                price="₹90.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/bluevuracao.png"
                                                title="Blue Curacao"
                                                content="It's a testament to our."
                                                price="₹100.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/pinacolada.png"
                                                title="Pina Colada"
                                                content="It's a testament to our."
                                                price="₹100.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/straberrycooler.png"
                                                title="Strawberry Cooler"
                                                content="It's a testament to our."
                                                price="₹100.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/mangomule.png"
                                                title="Mango Mule"
                                                content="It's a testament to our."
                                                price="₹90.00"
                                            ></FoodItemCard>
                                             <FoodItemCard
                                                img="/assets/img/menu/lemonbasilcooler.png"
                                                title="Lemon Basil Cooler"
                                                content="It's a testament to our."
                                                price="₹90.00"
                                            ></FoodItemCard>
                                             <FoodItemCard
                                                img="/assets/img/menu/watermelonmajito.png"
                                                title="Watermelon Mojito"
                                                content="It's a testament to our."
                                                price="₹100.00"
                                            ></FoodItemCard>
                                             <FoodItemCard
                                                img="/assets/img/menu/kiwimintmajito.png"
                                                title="Kiwi Mint Sparkler"
                                                content="It's a testament to our."
                                                price="₹110.00"
                                            ></FoodItemCard>
                                             <FoodItemCard
                                                img="/assets/img/menu/kranberry.png"
                                                title="Cranberry Spritzer"
                                                content="It's a testament to our."
                                                price="₹110.00"
                                            ></FoodItemCard>
                                             <FoodItemCard
                                                img="/assets/img/menu/orangesunrise.png"
                                                title="Orange Sunrise"
                                                content="It's a testament to our."
                                                price="₹100.00"
                                            ></FoodItemCard>

                                        </div>
                                        <div className="col-lg-6">
                                            <FoodItemCard
                                                img="/assets/img/menu/hotcoffe.png"
                                                title="Natural Hot Coffee"
                                                content="It's a testament to our."
                                                price="₹20.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/hotcoffee.png"
                                                title="Creamy Coffee"
                                                content="It's a testament to our."
                                                price="₹40.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/blackcoffe.png"
                                                title="Black Coffee"
                                                content="It's a testament to our."
                                                price="₹15.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/coldcoffee.png"
                                                title="Regular Cold Coffee"
                                                content="It's a testament to our."
                                                price="₹40.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/choclatecoldcoffee.png"
                                                title="Chocolate Cold Coffee"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>
                                               <FoodItemCard
                                                img="/assets/img/menu/vanilacoffee.png"
                                                title="Coffee with Vanilla Ice Cream"
                                                content="It's a testament to our."
                                                price="₹60.00"
                                            ></FoodItemCard>
                                               <FoodItemCard
                                                img="/assets/img/menu/coffeevanilaicecream.png"
                                                title="Coffee with Chocolate Ice Cream"
                                                content="It's a testament to our."
                                                price="₹60.00"
                                            ></FoodItemCard>
                                             <FoodItemCard
                                                img="/assets/img/menu/gingertea.png"
                                                title="Ginger Cardamom Tea"
                                                content="It's a testament to our."
                                                price="₹10.00"
                                            ></FoodItemCard>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className={`tab-pane ${isActive === 'ChickenPizza' ? 'active' : ''}`} id="pills-chickenPizza" role="tabpanel"
                                    aria-labelledby="pills-chickenPizza-tab" tabIndex="0">
                                    <div className="row gx-30">
                                        <div className="col-lg-6">

                                            <FoodItemCard
                                                img="/assets/img/menu/menuThumb1_1.png"
                                                title="Chinese Pasta"
                                                content="It's a testament to our."
                                                price="₹15.99"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/menuThumb1_5.png"
                                                title="Grilled Chicken"
                                                content="It's a testament to our."
                                                price="₹55.99"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/menuThumb1_2.png"
                                                title="Chicken Fried Rice"
                                                content="It's a testament to our."
                                                price="₹25.99"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/menuThumb1_3.png"
                                                title="Chicken Pizza"
                                                content="It's a testament to our."
                                                price="₹115.99"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/menuThumb1_4.png"
                                                title="Chicken Noodles"
                                                content="It's a testament to our."
                                                price="₹154.99"
                                            ></FoodItemCard>

                                        </div>
                                        <div className="col-lg-6">
                                            <FoodItemCard
                                                img="/assets/img/menu/menuThumb1_9.png"
                                                title="Vegetables Burger"
                                                content="It's a testament to our."
                                                price="₹75.99"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/menuThumb1_10.png"
                                                title="Brief Chicken"
                                                content="It's a testament to our."
                                                price="₹44.99"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/menuThumb1_6.png"
                                                title="Egg and Cucumber"
                                                content="It's a testament to our."
                                                price="₹65.99"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/menuThumb1_7.png"
                                                title="Chicken White Rice"
                                                content="It's a testament to our."
                                                price="₹135.99"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/menuThumb1_8.png"
                                                title="Spatial Barger"
                                                content="It's a testament to our."
                                                price="₹95.99"
                                            ></FoodItemCard>

                                        </div>
                                    </div>
                                </div> */}
                                <div className={`tab-pane ${isActive === 'FreshPasta' ? 'active' : ''}`} id="pills-freshPasta" role="tabpanel"
                                    aria-labelledby="pills-freshPasta-tab" tabIndex="0">
                                    <div className="row gx-30">
                                        <div className="col-lg-6">
                                            <FoodItemCard
                                                img="/assets/img/menu/normalpasta.png"
                                                title="Classic Pasta"
                                                content="It's a testament to our."
                                                price="₹70.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/redsaucepasta.png"
                                                title="Red Sauce Pasta"
                                                content="It's a testament to our."
                                                price="₹90"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/whitesaucepasta.png"
                                                title="White Sauce Pasta"
                                                content="It's a testament to our."
                                                price="₹110.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/pinksaucepasta.png"
                                                title="Pink Sauce Pasta"
                                                content="It's a testament to our."
                                                price="₹130.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/cheessepata.png"
                                                title="Mac & Cheese Pasta"
                                                content="It's a testament to our."
                                                price="₹150.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/pestopasta.png"
                                                title="Pesto Pasta"
                                                content="It's a testament to our."
                                                price="₹150.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/normalpasta.png"
                                                title="Baked Lasagna Pasta"
                                                content="It's a testament to our."
                                                price="₹160.00"
                                            ></FoodItemCard>
                                        </div>
                                        <div className="col-lg-6">
                                            <FoodItemCard
                                                img="/assets/img/menu/classicfries.png"
                                                title="Classic Fries"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/frenchfries.png"
                                                title="Peri Peri"
                                                content="It's a testament to our."
                                                price="₹70.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/tandoorifriess.png"
                                                title="Tandoori"
                                                content="It's a testament to our."
                                                price="₹70.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/cheesejalpano.png"
                                                title="Cheese Jalepeno"
                                                content="It's a testament to our."
                                                price="₹80.00"
                                            ></FoodItemCard>


                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${isActive === 'SouthIndian' ? 'active' : ''}`} id="pills-SouthIndian" role="tabpanel"
                                    aria-labelledby="pills-freshPasta-tab" tabIndex="0">

                                    <div className="row gx-30">
                                        <div className="col-lg-6">
                                            <FoodItemCard
                                                img="/assets/img/menu/paperdosa.png"
                                                title="Papaer Dosa"
                                                content="It's a testament to our."
                                                price="₹60.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/masaladosa.png"
                                                title="Masala Dosa"
                                                content="It's a testament to our."
                                                price="₹80"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/mysoremasaladosa.png"
                                                title="Mysore Plain Dosa"
                                                content="It's a testament to our."
                                                price="₹100.00"
                                            ></FoodItemCard>
                                            <FoodItemCard mysoremasaladosa
                                                img="/assets/img/menu/normaldosa.png"
                                                title="Mysore Masala Dosa"
                                                content="It's a testament to our."
                                                price="₹100.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/normaldosa.png"
                                                title="Cheese Masala Dosa"
                                                content="It's a testament to our."
                                                price="₹130.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/normaldosa.png"
                                                title="Paneer Masala Dosa"
                                                content="It's a testament to our."
                                                price="₹130.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/normaldosa.png"
                                                title="Podi Plain Dosa"
                                                content="It's a testament to our."
                                                price="₹70.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/normaldosa.png"
                                                title="Podi Masala Dosa"
                                                content="It's a testament to our."
                                                price="₹90.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/pavbhajidosa.png"
                                                title="Pav Bhaji Dosa"
                                                content="It's a testament to our."
                                                price="₹110.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/paperdosa.png"
                                                title="Masala Rava Dosa"
                                                content="It's a testament to our."
                                                price="₹80.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/paperdosa.png"
                                                title="Mysore Masala Rava Dosa"
                                                content="It's a testament to our."
                                                price="₹100.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/paperdosa.png"
                                                title="Cheese Masala Rava Dosa"
                                                content="It's a testament to our."
                                                price="₹120.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/paperdosa.png"
                                                title="Paneer Masala Rava Dosa"
                                                content="It's a testament to our."
                                                price="₹130.00"
                                            ></FoodItemCard>
                                        </div>
                                        <div className="col-lg-6">
                                            <FoodItemCard
                                                img="/assets/img/menu/plainuttpama.png"
                                                title="Plain Uttapam"
                                                content="It's a testament to our."
                                                price="₹49.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/plainuttpama.png"
                                                title="Podi Uttapam"
                                                content="It's a testament to our."
                                                price="₹69.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/plainuttpama.png"
                                                title="Onion Uttapam"
                                                content="It's a testament to our."
                                                price="₹79.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/plainuttpama.png"
                                                title="Tomato Uttapam"
                                                content="It's a testament to our."
                                                price="₹79.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/plainuttpama.png"
                                                title="Onion Capsicum Uttapam"
                                                content="It's a testament to our."
                                                price="₹89.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/plainuttpama.png"
                                                title="Veg Paneer, Cheese Uttapam"
                                                content="It's a testament to our."
                                                price="₹99.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/meduvada.png"
                                                title="Medu vada(2 Piece)"
                                                content="It's a testament to our."
                                                price="₹60.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/plainidli.png"
                                                title="Plane Idli (2 Piece)"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>


                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${isActive === 'IndianSnacks' ? 'active' : ''}`} id="pills-IndianSnacks" role="tabpanel"
                                    aria-labelledby="pills-IndianSnacks-tab" tabIndex="0">
                                        <div className="row gx-30">
                                        <div className="col-lg-6">
                                            <FoodItemCard
                                                img="/assets/img/menu/paperdosa.png"
                                                title="Mix Daal Pakoda"
                                                content="It's a testament to our."
                                                price="₹60.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/masaladosa.png"
                                                title="Mix Veg Pakoda"
                                                content="It's a testament to our."
                                                price="₹50"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/mysoremasaladosa.png"
                                                title="Regular Vada Pav"
                                                content="It's a testament to our."
                                                price="₹30.00"
                                            ></FoodItemCard>
                                            <FoodItemCard mysoremasaladosa
                                                img="/assets/img/menu/normaldosa.png"
                                                title="Cheese Vada Pav"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/normaldosa.png"
                                                title="Tandoori Paneer Vada pav"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/normaldosa.png"
                                                title="Italian Cheese Vada pav"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/normaldosa.png"
                                                title="Schezwan Vada Pav"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/normaldosa.png"
                                                title="Peri Peri Vada Pav"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>
                                          
                                        </div>
                                        <div className="col-lg-6">
                                            <FoodItemCard
                                                img="/assets/img/menu/alooparataha.png"
                                                title="Aloo Paratha (with curd)"
                                                content="It's a testament to our."
                                                price="₹50.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/pannerparatha.png"
                                                title="Aloo Paneer Paratha (with curd)"
                                                content="It's a testament to our."
                                                price="₹60.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/cheeseparatha.png"
                                                title="Aloo Cheese Paratha (with curd)"
                                                content="It's a testament to our."
                                                price="₹60.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/paneerparatha.png"
                                                title="Paneer Mutter Paratha (with curd)"
                                                content="It's a testament to our."
                                                price="₹60.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/paneerparatha.png"
                                                title="Cheese Paneer Paratha (with curd)"
                                                content="It's a testament to our."
                                                price="₹60.00"
                                            ></FoodItemCard>
                                            <FoodItemCard
                                                img="/assets/img/menu/alooparataha.png"
                                                title="Aloo Onion Paratha (with curd)"
                                                content="It's a testament to our."
                                                price="₹60.00"
                                            ></FoodItemCard>
                                           


                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="marquee-wrapper style-1 text-slider section-padding pt-0 mt-5">
                <div className="marquee-inner to-left">
                    <ul className="marqee-list d-flex">
                        <li className="marquee-item style1">
                            <span className="text-slider"></span><span className="text-slider text-style">MOCTAILS</span>
                            <span className="text-slider"></span><span className="text-slider text-style">HOT COFFEE</span>
                            <span className="text-slider"></span><span className="text-slider text-style">COLD COFFEE</span>
                            <span className="text-slider"></span><span className="text-slider text-style">HOT TEA</span>
                            <span className="text-slider"></span><span className="text-slider text-style">FRESH DOUGH PIZZA</span>
                            <span className="text-slider"></span><span className="text-slider text-style">GARLIC BREAD</span>
                            <span className="text-slider"></span><span className="text-slider text-style">BURGER</span>
                            <span className="text-slider"></span><span className="text-slider text-style">SANDWICH</span>
                            <span className="text-slider"></span><span className="text-slider text-style">PASTA</span>
                            <span className="text-slider"></span><span className="text-slider text-style">BURGER</span>
                            <span className="text-slider"></span><span className="text-slider text-style">FRENCH FRIES</span>
                            <span className="text-slider"></span><span className="text-slider text-style">SOUTH INDIAN </span>
                            <span className="text-slider"></span><span className="text-slider text-style">DOSA </span>
                            <span className="text-slider"></span><span className="text-slider text-style">UTTAPAM</span>
                            <span className="text-slider"></span><span className="text-slider text-style">RAVA DOSA</span>
                            <span className="text-slider"></span><span className="text-slider text-style">MEDU VADA</span>
                            <span className="text-slider"></span><span className="text-slider text-style">IDL</span>
                            <span className="text-slider"></span><span className="text-slider text-style">RAVA DOSA</span>
                            <span className="text-slider"></span><span className="text-slider text-style">INDIAN SNACKS</span>
                            <span className="text-slider"></span><span className="text-slider text-style">PAKODE</span>
                            <span className="text-slider"></span><span className="text-slider text-style">VADA PAV</span>
                            <span className="text-slider"></span><span className="text-slider text-style">PARATHA( WITH CURD)</span>

                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FoodItem1;