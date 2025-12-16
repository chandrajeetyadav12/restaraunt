"use client"
import { useState, useEffect } from "react";
import FoodItemCard from "../Card/FoodItemCard";
import Image from "next/image";
import axios from "axios";
const FoodItem1 = () => {
    const [isActive, setIsActive] = useState('FastFood');
    const [foods, setFoods] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    // console.log(activeCategory)
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/categories`
                );
                console.log(res)
                setCategories(res.data);

                // set first category active by default
                if (res.data.length > 0) {
                    setActiveCategory(res.data[0]._id);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchCategories();
    }, []);
    useEffect(() => {
        if (!activeCategory) return;

        axios
            .get(
                `${process.env.NEXT_PUBLIC_API_URL}/api/foods/category/${activeCategory}`
            )
            .then((res) => setFoods(res.data)) // setFoods(res.data)
            .catch(console.error);
    }, [activeCategory]);

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
                            <ul className="nav nav-pills mb-3" role="tablist">
                                {categories.map((category) => (
                                    <li key={category._id} className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activeCategory === category._id ? "active" : ""
                                                }`}
                                            onClick={() => setActiveCategory(category._id)}
                                            type="button"
                                        >
                                               <Image
                                                src= {category?.image}
                                                alt={category.name}
                                                width={36}
                                                height={36}
                                            />
                                            {category.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                         
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active">
                                    <div className="row gx-60">
                                        {foods.length === 0 && <p>No items found</p>}

                                        {foods.map((food) => (
                                            <div className="col-lg-6" key={food._id}>
                                                <FoodItemCard
                                                    img={food.image || "/assets/img/menu/placeholder.png"}
                                                    title={food?.name}
                                                    content={food?.description}
                                                    price={`₹${food?.price}`}
                                                />
                                            </div>
                                        ))}
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