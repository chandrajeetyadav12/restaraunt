"use client"
import Image from "next/image";
// import CuisineTabs from "../cuisine/CuisineTabs";
import { useEffect, useState } from "react";

const FoodItem1 = () => {
    const [cuisines, setCuisines] = useState([]);
    const [selectedCuisine, setSelectedCuisine] = useState(null);
    const [menuData, setMenuData] = useState(null);


    // useEffect(() => {
    //     fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Cuisine`)
    //         .then((res) => res.json())
    //         .then((data) => setCuisines(data));
    // }, []);
    useEffect(() => {
        const loadCuisines = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Cuisine`);
            const data = await res.json();

            setCuisines(data);

            //  AUTO LOAD FIRST CUISINE
            if (data.length > 0) {
                handleCuisineClick(data[0]);
            }
        };

        loadCuisines();
    }, []);

    const handleCuisineClick = async (cuisine) => {
        if (!cuisine) return;

        setSelectedCuisine(cuisine);

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/menu/menu-structure/${cuisine._id}`
        );
        const data = await res.json();

        setMenuData(data);
    };

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
                        {/* <CuisineTabs /> */}
                        <div className="food-menu-tab">
                            <ul className="nav nav-pills mb-3">
                                {cuisines.map((cuisine) => (
                                    <li key={cuisine._id} onClick={() => handleCuisineClick(cuisine)}
                                        className={`nav-item nav-link ${selectedCuisine?._id === cuisine._id ? "active" : ""
                                            }`}
                                    >
                                        {cuisine.name}
                                    </li>
                                ))}
                            </ul>
                            {/* menu display */}
                            {menuData && (
                                <div className="menu-wrapper">
                                    {/* <h2 className="mb-4">{menuData.cuisine}</h2> */}

                                    {menuData.sections.map((section) => (
                                        <div key={section.sectionId} className="mb-5">
                                            {/* <h3 className="mb-3">{section.sectionName}</h3> */}

                                            {Object.entries(section.items).map(([subcategory, items]) => (
                                                <div key={subcategory} className="mb-4">
                                                    {subcategory !== "ITEMS" && (
                                                        <h5 className="text-muted mb-3">{subcategory}</h5>
                                                    )}

                                                    {/* Cards Grid */}
                                                    <div className="row">
                                                        {items.map((item) => (
                                                            <div key={item._id} className="col-md-6 mb-4">
                                                                <div className="card h-100 shadow-sm">
                                                                    <div className="card-body d-flex">
                                                                        {/* Image */}
                                                                        <div className="me-3">
                                                                            <Image
                                                                                src={item.image}
                                                                                alt={item.name}
                                                                                width={90}
                                                                                height={90}
                                                                                className="rounded"
                                                                            />
                                                                        </div>

                                                                        {/* Content */}
                                                                        <div className="flex-grow-1">
                                                                            <h6 className="mb-1">{item.name}</h6>
                                                                            <p className="mb-1 text-muted">₹{item.price}</p>

                                                                            {/* Veg / Non-Veg */}
                                                                            <span className={`badge ${item.isVeg ? "bg-success" : "bg-danger"}`}>
                                                                                {item.isVeg ? "Veg" : "Non-Veg"}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}



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