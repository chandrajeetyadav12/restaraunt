"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Link from "next/link";
import Image from "next/image";

const Offer1 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

      const offerItems = [
        {img:'/assets/img/offer/naturalsandwich.png', title1:'ON THIS WEEK', title2:'Natural Sandwhich ', content:'limits Time Offer', addClass:'theme-btn style4'},      
        {img:'/assets/img/offer/regularberger.png', title1:'WELCOME To Ambrosia Starbuds cafe', title2:'regular Berger', content:'limits Time Offer', addClass:'theme-btn style5'},      
        {img:'/assets/img/offer/tandooripannerpizza.png', title1:'ON THIS WEEK', title2:'tandoori Panner Pizza', content:'limits Time Offer', addClass:'theme-btn style4'},      
      ]; 

    return (
        <div className="offer-section fix bg-color2">
        <div className="offer-wrapper">
            <div className="container">
                <div className="row gy-4">
                {offerItems.map((item, i) => (
                    <div key={i} className="col-lg-6 col-xl-4">
                        <div className="offer-card style1 wow fadeInUp" data-wow-delay="0.2s" data-background="/assets/img/bg/offerBG0_1.jpg"
                            >
                            <div className="offer-content">
                                <h6>{item.title1}</h6>
                                <h3>{item.title2}</h3>
                                <p>{item.content}</p>
                                <Link href="/menu" className={item.addClass}>
                                    ORDER NOW <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                            <div className="offer-thumb">
                                <img className="thumbImg" src={item.img} alt="thumb" />
                                <div className="shape float-bob-x">
                                <Image src="/assets/img/shape/offerShape1_4.png" alt="img" width={69} height={82}   />
                                    </div>
                            </div>
                        </div>
                    </div>
                    ))}

                  
                </div>
            </div>
        </div>
    </div>
    );
};

export default Offer1;