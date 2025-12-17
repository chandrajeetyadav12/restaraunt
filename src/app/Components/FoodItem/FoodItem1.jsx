"use client"
import Image from "next/image";
import CuisineTabs from "../cuisine/CuisineTabs";
const FoodItem1 = () => {

    // check




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
                            <div className="cuisineList">
                                <h3 className="center cuisineHead wow fadeInUp" data-wow-delay="0.7s">
                                    Choose a cuisine and discover food you’ll love.
                                </h3>
                            </div>

                        </div>
                                <CuisineTabs />

                        {/* food menu tabs */}


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