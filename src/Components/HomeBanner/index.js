import React from "react";
import Slider from "react-slick";


const HomeBanner = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoPlay: true
    };

    return(
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="items">
                    <img src="https://cmsimages.shoppersstop.com/SS_25_pvt_brands_main_kv_web_e55ed30937/SS_25_pvt_brands_main_kv_web_e55ed30937.png" alt='brands' className="w-100"/>
                </div>
                <div className="items">
                    <img src="https://cmsimages.shoppersstop.com/Watches_web_914c0225e1/Watches_web_914c0225e1.png" alt='brands' className="w-100"/>
                </div>
                <div className="items">
                    <img src="https://cmsimages.shoppersstop.com/Footwear_web_789063289b/Footwear_web_789063289b.png" alt='brands' className="w-100"/>
                </div>
                <div className="items">
                    <img src="https://cmsimages.shoppersstop.com/Men_web_09bc0f0efe/Men_web_09bc0f0efe.png" alt='brands' className="w-100"/>
                </div>

            </Slider>
                
        </div> 
    )
}

export default HomeBanner;