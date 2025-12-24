import Link from "next/link";

const Gallery2 = () => {

    const brandContent = [
        {img:'/assets/img/gallery/cheescornpizza.png',addclass:'col-lg-5'},
        {img:'/assets/img/gallery/coffeevanilaicecream.png',addclass:'col-lg-4'},
        {img:'/assets/img/gallery/coldcoffee.png',addclass:'col-lg-3'},
        {img:'/assets/img/gallery/choclatecoldcoffee.png',addclass:'col-lg-4'},
        {img:'/assets/img/gallery/bluevuracao.png',addclass:'col-lg-4'},
        {img:'/assets/img/gallery/cheeseberger.png',addclass:'col-lg-4'},
        {img:'/assets/img/gallery/blackcoffe.png',addclass:'col-lg-4'},
        {img:'/assets/img/gallery/classicmojito.png',addclass:'col-lg-4'},
        {img:'/assets/img/gallery/cheesetomatopizza.png',addclass:'col-lg-4'},
        {img:'/assets/img/gallery/cheesejalpano.png',addclass:'col-lg-5'},
        {img:'/assets/img/gallery/cheeseparatha.png',addclass:'col-lg-4'},
        {img:'/assets/img/gallery/cheesgarlic.png',addclass:'col-lg-3'},

      ];

    return (
        <div className="gallery-section section-padding fix">
        <div className="container">
            <div className="row gy-4 mb-4">
            {brandContent.map((item, i) => (
                <div key={i} className={item.addclass}>
                    <div className="gallery-thumb style2">
                        <Link href="/menu">
                            <img src={item.img} alt="thumb" />
                            <div className="icon"><img src="/assets/img/icon/arrow_icon.png" alt="icon" /></div>
                        </Link>
                    </div>
                </div>
                ))}
            
            </div>
        </div>
    </div>
    );
};

export default Gallery2;