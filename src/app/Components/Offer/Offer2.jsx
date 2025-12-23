"use client"
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
// import Link from "next/link";
import Image from "next/image";

const Offer2 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

      const offerItems = [
        {img:'/assets/img/offer/naturalsandwich.png', bgimg:'/assets/img/bg/offerBG2_1.jpg', title1:'start price Rs 30', title2:'TODAY SPACIAL Natural Sandwich', content:'limits Time Offer', addClass:'theme-btn style5'},      
        {img:'/assets/img/offer/regularberger.png', bgimg:'/assets/img/bg/offerBG2_3.jpg', title1:'start price Rs 30', title2:'special Regular Berger', content:'limits Time Offer', addClass:'theme-btn style4'},         
        {img:'/assets/img/offer/tandooripannerpizza.png', bgimg:'/assets/img/bg/offerBG2_1.jpg', title1:'start price Rs 180', title2:'Tandoori Panner Pizza', content:'limits Time Offer', addClass:'theme-btn style4'},         
      
    ]; 

    return (
<div className="offer-section fix bg-color2 mt-5">
        <div className="offer-wrapper">
            <div className="container">
                <div className="row gy-4">
                {offerItems.map((item, i) => (
                    <div key={i} className="col-lg-6 col-xl-4">
                        <div className="offer-card style1 wow fadeInUp" data-wow-delay="0.2s" data-background={item.bgimg}
                            >
                            <div className="offer-content">
                                <h6 className="text-white">{item.title1}</h6>
                                <h3>{item.title2}</h3>
                                <p className="text-white">{item.content}</p>
                                {/* <Link href="/menu" className={item.addClass}>
                                    ORDER NOW <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                </Link> */}
                            </div>
                            <div className="offer-thumb">
                            <Image className="thumbImg" src={item.img} alt="img" width={276} height={260}   />
                                <div className="shape float-bob-x"><Image src="/assets/img/shape/offerShape1_4.png" alt="img" width={69} height={82}   /></div>
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

export default Offer2;