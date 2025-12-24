"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Faq2 = () => {

const faqContent = [
  {
    title: "What are the restaurant’s operating hours?",
    content:
      "We are open every day from 10:00 AM to 11:00 PM. Operating hours may vary on public holidays, so we recommend checking our website or contacting us before visiting."
  },
  {
    title: "Do you offer vegetarian or vegan options?",
    content:
      "Yes, we offer a wide range of vegetarian and vegan dishes made with fresh, high-quality ingredients. Our menu clearly highlights vegetarian and vegan options for your convenience."
  },
  {
    title: "Are kids allowed in the restaurant?",
    content:
      "Absolutely! Our restaurant is family-friendly, and we welcome guests of all ages. We also offer kid-friendly meals and comfortable seating for families."
  },
  {
    title: "Do you provide home delivery or takeaway services?",
    content:
      "Yes, we offer both home delivery and takeaway services. You can place your order directly through our website."
  },
  {
    title: "Do I need to make a reservation in advance?",
    content:
      "Reservations are not mandatory, but we highly recommend booking in advance during weekends and peak hours to ensure availability and avoid waiting time."
  }
];



    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);
    
    const handleItemClick = index => {
        if (index === openItemIndex) {
        setOpenItemIndex(-1);
        } else {
        setOpenItemIndex(index);
        }
    };
    useEffect(() => {
        if (firstItemOpen) {
        setOpenItemIndex(0);
        setFirstItemOpen(false);
        }
    }, [firstItemOpen]);
      

    return (
        <div className="faq-section fix section-padding">
        <div className="container">
            <div className="title-area mb-45">
                <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20}   />
                    Faq<Image className="ms-1"
                        src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20}   />
                </div>
                <div className="title wow fadeInUp" data-wow-delay="0.7s">
                    frequently ask question
                </div>
            </div>
            <div className="row gx-60">
                <div className="col-xl-5">
                    <div className="faq-thumb w-100 h-100 fix rounded-3">
                    <Image className="w-100 h-100 rounded-3" src="/assets/img/dishes/faqimg1.webp" alt="img" width={505} height={599}   />
                    </div>
                </div>
                <div className="col-xl-7">
                    <div className="faq-content style-1 mt-5">
                        <div className="faq-accordion">
                            <div className="accordion" id="accordion">
                            {faqContent.map((item, index) => (
                                <div key={index} className={`accordion-item mb-3 ${index === openItemIndex ? "active" : "" }`}  data-wow-delay=".3s">
                                    <h5 onClick={() => handleItemClick(index)} className="accordion-header">
                                        <button className="accordion-button" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true"
                                            aria-controls="faq1">
                                            {item.title}
                                        </button>
                                    </h5>
                                    <div ref={accordionContentRef} id="faq1" className="accordion-collapse" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                        {item.content}
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Faq2;