"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
// import Link from "next/link";
import FoodItemCard from "../../Components/Card/FoodItemCard";
import { useParams } from "next/navigation";

// import FoodItem1 from "../../Components/Card/FoodItemCard";
export default function MenuPage() {
  const [sections, setSections] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

    const params = useParams();
  const cuisineId = params.cuisineId;
  useEffect(() => {
    if (!cuisineId) return;

    const fetchMenu = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/menuStructure/cuisine/${cuisineId}/aggregation`
        );

        //  API gives { cuisine, sections }
        setSections(res.data.sections);
        setActiveTab(0); // reset when cuisine changes
      } catch (error) {
        console.error(error);
      }
    };

    fetchMenu();
  }, [cuisineId]);
  if (sections.length === 0) {
    return <p>Loading menu...</p>;
  }
  return (


  
    <section className="food-menu-section fix section-padding">
      <div className="food-menu-wrapper style1">
        <div className="container">
          <div className="food-menu-tab-wrapper style-bg boxShadow_foodContainer">
            <div className="food-menu-tab">
            
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
                    Choose a Popular dishes and discover food you’ll love.
                  </h3>
                </div>

              </div>
              

              <ul className="nav nav-pills mb-3" role="tablist">
                {sections.map((section, index) => (
                  <li key={index} className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === index ? "active" : ""}`}
                      onClick={() => setActiveTab(index)}
                      type="button"
                    >
                      {section.name}
                    </button>
                  </li>
                ))}
              </ul>


              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active">
                  <div className="row gx-60">
                    {sections[activeTab].items.length === 0 && (
                      <p>No items found</p>
                    )}

                    {sections[activeTab].items.map((food, idx) => (
                      <div className="col-lg-6" key={idx}>
                        <FoodItemCard
                          img={food.image || "/assets/img/menu/placeholder.png"}
                          title={food.name}
                          content={food.description}
                          price={`₹${food.price}`}
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
    </section>
  )
}




