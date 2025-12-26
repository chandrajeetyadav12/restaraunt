"use client"
import FoodItemCard2 from "../Card/FoodItemCard2";
import { useState, useEffect } from "react";
import axios from "axios";
const FoodItem4 = () => {
    const [PopularFood, setPopularFood] = useState([])
    console.log(PopularFood)
    useEffect(() => {
        const getPopularApi = async () => {
            const apiVal = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/menuItems/popular`)
            console.log(apiVal)
            setPopularFood(apiVal.data)
        }
        getPopularApi()
    }, [])
    return (
        <section className="food-menu-section fix section-padding">
            <div className="food-menu-wrapper-container style2">
                <div className="container">
                    <div className="food-menu-wrapper style2 section-padding">
                        <div className="container">
                            <div className="title-area">
                                <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                                    <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />POPULAR DISHES<img
                                        className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                                </div>
                                <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                                    Our Most Popular Deals
                                </h2>
                            </div>
                            <div className="food-menu-tab-wrapper style2">
                                <div className="row gy-5">
                                    {PopularFood.map((item, id) => {
                                        return (
                                            <div className="col-xl-4 d-flex " key={id}>
                                                   <FoodItemCard2
                                                            img={item.image} alt="thumb" width="152" height="152"
                                                            title={item.name}
                                                            description={item.description}
                                                            price={item.price}
                                                        >
                                                        </FoodItemCard2>
                                              
                                            </div>
                                        )
                                    })}



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="marquee-wrapper style-1 text-slider section-padding">
                <div className="marquee-inner to-left">
                    <ul className="marqee-list d-flex">
                        <li className="marquee-item style1">
                            <span className="text-slider"></span><span className="text-slider text-style">Cheese Onion </span>
                            <span className="text-slider"></span><span className="text-slider text-style">Cheese Corn</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Veggie Fresh Pizza</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Margherita Pizza</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Double Cheese Margherita</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Farm Fresh Pizza</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Mexican Pizza</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Paneer Onion Pizza</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Tandoori Paneer Pizza</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Paneer Tikka Pizza</span>
                            <span className="text-slider"></span><span className="text-slider text-style">5 Pepper Pizza </span>
                            <span className="text-slider"></span><span className="text-slider text-style">Chef's Veg Wonder</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Classic Garlic Bread</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Cheese Garlic Bread</span>
                        </li>
                    </ul>
                </div>
            </div>

        </section>

    );
};

export default FoodItem4;