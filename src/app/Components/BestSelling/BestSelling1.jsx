"use client"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const BestSelling1 = () => {
    const [sales, setSales] = useState([])
    const [BestSellingLoading, setBestSellingLoading] = useState(true)
    const [error, setError] = useState(null)
    const limit = 8;
    useEffect(() => {
        const getBestSellsApi = async () => {
            try {
                setBestSellingLoading(true)
                setError(null)
                const salesdata = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/menuItems/best-selling`,
                    {
                        params: { limit }
                    })
                setSales(salesdata.data.data)
            } catch (error) {
                setError(error.response?.data?.message || error.message || "somethings went wrong")
            }
            finally {
                setBestSellingLoading(false)
            }

        }
        getBestSellsApi()

    }, [])
    return (
        <section className="popular-dishes-section fix section-padding">
            <div className="popular-dishes-wrapper style1">
                <div className="shape1 d-none d-xxl-block"><Image src="/assets/img/shape/popularDishesShape1_1.png" alt="img" width={164} height={183} />
                </div>
                <div className="shape2 float-bob-y d-none d-xxl-block"><Image src="/assets/img/shape/popularDishesShape1_2.png" alt="img" width={239} height={149} /></div>
                <div className="container">
                    <div className="title-area">
                        <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                            <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20} />
                            POPULAR DISHES<Image className="ms-1"
                                src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20} />
                        </div>{BestSellingLoading && <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                            Best selling Dishes loading....
                        </h2>}
                        {!BestSellingLoading && !error && sales.length > 0 &&<h2 className="title wow fadeInUp" data-wow-delay="0.7s">Best selling Dishes</h2>}

                    </div>
                    <div className="dishes-card-wrap style1">
                        {!BestSellingLoading &&!error&& sales.length > 0 && sales.map((item, i) => (
                            <div key={i} className="dishes-card style1 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="dishes-thumb">
                                    <Image src={item.image} alt="img" width={158} height={158} />
                                </div>
                                <h3>{item.name}</h3>
                                <p className="text-start">{item.description}</p>
                                <h6 className="text-center">Price:{item.price}</h6>
                                <div className="social-profile">
                                    <span className="plus-btn"> <Link href="/shop/wishlist"> <i className="bi bi-heart"></i></Link></span>
                                    <ul>
                                        <li><Link href="/shop/cart"><i className="bi bi-basket2"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    {!BestSellingLoading && !error &&(
                        <div className="btn-wrapper  wow fadeInUp" data-wow-delay="0.9s">
                            <Link className="theme-btn" href="/menu">VIEW ALL ITEM <i className="bi bi-arrow-right"></i></Link>
                        </div>
                    )}

                </div>
            </div>

        </section>

    );
};

export default BestSelling1;