"use client"
import { useState } from "react";
import FoodItemCard from "../Card/FoodItemCard";
import Image from "next/image";

const FoodItem1 = () => {
    const [isActive, setIsActive] = useState('FastFood');
    return (
<section className="food-menu-section fix section-padding">
        <div className="burger-shape">
        <Image src="/assets/img/shape/burger-shape.png" alt="img" width={148} height={160}   />
        </div>
        <div className="fry-shape">
        <Image src="/assets/img/shape/fry-shape.png" alt="img" width={137} height={158}   />
        </div>
        <div className="food-menu-wrapper style1">
            <div className="container">
                <div className="food-menu-tab-wrapper style-bg">
                    <div className="title-area">
                        <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                        <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20}   />
                            FOOD MENU<Image className="ms-1"
                                src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20}   />
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
                                    aria-controls="pills-FastFood" aria-selected="true"><Image src="/assets/img/menu/fastfood.png" alt="img" width={36} height={36}   />Fast Food</button>
                            </li>
                            <li className={`nav-item ${isActive === 'DrinkJuice' ? 'active' : ''}`} onClick={() => setIsActive('DrinkJuice')} role="presentation">
                                <button className="nav-link" id="pills-drinkJuice-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-drinkJuice" type="button" role="tab"
                                    aria-controls="pills-drinkJuice" aria-selected="false"><Image src="/assets/img/menu/drinkjuice.png" alt="img" width={36} height={36}   />Drink & Juice</button>
                            </li>
                            {/* <li className={`nav-item ${isActive === 'ChickenPizza' ? 'active' : ''}`} onClick={() => setIsActive('ChickenPizza')} role="presentation">
                                <button className="nav-link" id="pills-chickenPizza-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-chickenPizza" type="button" role="tab"
                                    aria-controls="pills-chickenPizza" aria-selected="false"><Image src="/assets/img/menu/chickenpizza.png" alt="img" width={36} height={36}   />Chicken Pizza</button>
                            </li> */}
                            <li className={`nav-item ${isActive === 'FreshPasta' ? 'active' : ''}`} onClick={() => setIsActive('FreshPasta')}  role="presentation">
                                <button className="nav-link" id="pills-freshPasta-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-freshPasta" type="button" role="tab"
                                    aria-controls="pills-freshPasta" aria-selected="false"><Image src="/assets/img/menu/freshpasta.png" alt="img" width={36} height={36}   />Fresh Pasta</button>
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
                                            content="It's a testament to our."
                                            price="₹79.00"
                                        ></FoodItemCard>
                                        <FoodItemCard
                                            img="/assets/img/menu/cheescornpizza.png"
                                            title="Cheese corn pizza"
                                            content="It's a testament to our."
                                            price="₹79.00"
                                        ></FoodItemCard>
                                        <FoodItemCard
                                            img="/assets/img/menu/cheesetomatopizza.png"
                                            title="Cheese tomato pizza"
                                            content="It's a testament to our."
                                            price="₹79.00"
                                        ></FoodItemCard>
                                        <FoodItemCard
                                            img="/assets/img/menu/cheeseonionpizza.png"
                                            title="Cheese Onion "
                                            content="It's a testament to our.( Loaded Cheese +Fresh Onion ) small"
                                            price="₹120.00"
                                        >
                                        </FoodItemCard>
                                          <FoodItemCard
                                            img="/assets/img/menu/cheeseonionpizza.png"
                                            title="Cheese Onion "
                                            content="It's a testament to our.( Loaded Cheese +Fresh Onion ) medium."
                                            price="₹180.00"
                                        >
                                        </FoodItemCard>
                                          <FoodItemCard
                                            img="/assets/img/menu/cheeseonionpizza.png"
                                            title="Cheese Onion "
                                            content="It's a testament to our.( Loaded Cheese +Fresh Onion ) large"
                                            price="₹250.00"
                                        >
                                        </FoodItemCard>
                                        
                                        <FoodItemCard
                                            img="/assets/img/menu/grilledchicken.png"
                                            title="Grilled Chicken"
                                            content="It's a testament to our."
                                            price="₹55.99"
                                        ></FoodItemCard>
                                    </div>
                                    <div className="col-lg-6">
                                        <FoodItemCard
                                            img="/assets/img/menu/eggandcucumber.png"
                                            title="Egg and Cucumber"
                                            content="It's a testament to our."
                                            price="₹65.99"
                                        ></FoodItemCard>                                       
                                        <FoodItemCard
                                            img="/assets/img/menu/chickenwhiterice.webp"
                                            title="Chicken White Rice"
                                            content="It's a testament to our."
                                            price="₹135.99"
                                        ></FoodItemCard> 
                                        <FoodItemCard
                                            img="/assets/img/menu/spatial.webp"
                                            title="Spatial Barger"
                                            content="It's a testament to our."
                                            price="₹95.99"
                                        ></FoodItemCard> 
                                         <FoodItemCard
                                            img="/assets/img/menu/vegetable berger.webp"
                                            title="Vegetables Burger"
                                            content="It's a testament to our."
                                            price="₹75.99"
                                        ></FoodItemCard>                                        
                                        <FoodItemCard
                                            img="/assets/img/menu/beefchicken.webp"
                                            title="Brief Chicken"
                                            content="It's a testament to our."
                                            price="₹44.99"
                                        ></FoodItemCard>  
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane ₹{isActive === 'DrinkJuice' ? 'active' : ''}`} id="pills-drinkJuice" role="tabpanel"
                                aria-labelledby="pills-drinkJuice-tab" tabIndex="0">
                                <div className="row gx-30">
                                    <div className="col-lg-6">
                      
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
                                        <FoodItemCard
                                            img="/assets/img/menu/menuThumb1_5.png"
                                            title="Grilled Chicken"
                                            content="It's a testament to our."
                                            price="₹55.99"
                                        ></FoodItemCard>
                                        <FoodItemCard
                                            img="/assets/img/menu/menuThumb1_1.png"
                                            title="Chinese Pasta"
                                            content="It's a testament to our."
                                            price="₹15.99"
                                        ></FoodItemCard>
                                        <FoodItemCard
                                            img="/assets/img/menu/menuThumb1_2.png"
                                            title="Chicken Fried Rice"
                                            content="It's a testament to our."
                                            price="₹25.99"
                                        ></FoodItemCard>                                       

                                    </div>
                                    <div className="col-lg-6">
                                    <FoodItemCard
                                            img="/assets/img/menu/menuThumb1_6.png"
                                            title="Egg and Cucumber"
                                            content="It's a testament to our."
                                            price="₹65.99"
                                        ></FoodItemCard>
                                        <FoodItemCard
                                            img="/assets/img/menu/menuThumb1_8.png"
                                            title="Spatial Barger"
                                            content="It's a testament to our."
                                            price="₹95.99"
                                        ></FoodItemCard> 
                                         <FoodItemCard
                                            img="/assets/img/menu/menuThumb1_9.png"
                                            title="Vegetables Burger"
                                            content="It's a testament to our."
                                            price="₹75.99"
                                        ></FoodItemCard>                                                                                 
                                        <FoodItemCard
                                            img="/assets/img/menu/menuThumb1_7.png"
                                            title="Chicken White Rice"
                                            content="It's a testament to our."
                                            price="₹135.99"
                                        ></FoodItemCard>                                      
                                        <FoodItemCard
                                            img="/assets/img/menu/menuThumb1_10.png"
                                            title="Brief Chicken"
                                            content="It's a testament to our."
                                            price="₹44.99"
                                        ></FoodItemCard> 
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane ₹{isActive === 'ChickenPizza' ? 'active' : ''}`}  id="pills-chickenPizza" role="tabpanel"
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
                            </div>
                            <div className={`tab-pane ₹{isActive === 'FreshPasta' ? 'active' : ''}`} id="pills-freshPasta" role="tabpanel"
                                aria-labelledby="pills-freshPasta-tab" tabIndex="0">
                                <div className="row gx-30">
                                    <div className="col-lg-6">
                                    <FoodItemCard
                                            img="/assets/img/menu/menuThumb1_2.png"
                                            title="Chicken Fried Rice"
                                            content="It's a testament to our."
                                            price="₹25.99"
                                        ></FoodItemCard>                                        
                                    <FoodItemCard
                                            img="/assets/img/menu/menuThumb1_1.png"
                                            title="Chinese Pasta"
                                            content="It's a testament to our."
                                            price="₹15.99"
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
                                        <FoodItemCard
                                            img="/assets/img/menu/menuThumb1_5.png"
                                            title="Grilled Chicken"
                                            content="It's a testament to our."
                                            price="₹55.99"
                                        ></FoodItemCard>
                                    </div>
                                    <div className="col-lg-6">
                                        <FoodItemCard
                                            img="/assets/img/menu/menuThumb1_6.png"
                                            title="Egg and Cucumber"
                                            content="It's a testament to our."
                                            price="₹65.99"
                                        ></FoodItemCard>   
                                        <FoodItemCard
                                            img="/assets/img/menu/menuThumb1_9.png"
                                            title="Vegetables Burger"
                                            content="It's a testament to our."
                                            price="₹75.99"
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
                                        <FoodItemCard
                                            img="/assets/img/menu/menuThumb1_10.png"
                                            title="Brief Chicken"
                                            content="It's a testament to our."
                                            price="₹44.99"
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