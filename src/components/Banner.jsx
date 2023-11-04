import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        cssEase: "ease-in-out"
    };
    return (
        <div className="overflow-hidden">
            <Slider {...settings}>
                <div className="h-[500px] lg:h-[750px]">
                    <img src="https://i.ibb.co/jgfY83t/image-5.png" className="w-full h-full object-cover" />
                    <div className="absolute w-full top-1/2 text-center -translate-y-1/2 z-20 px-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium">Burger Excellence</h1>
                        <p className="text-white max-w-xl mx-auto mt-4">Bite into perfection. Our burgers redefine culinary bliss, delivering taste and quality that&apos;s simply unparalleled</p>
                        <div className="relative max-w-fit mx-auto mt-10">
                            <span className="w-full h-full absolute border-4 border-red-100 -right-2 -bottom-2 z-0"></span>
                            <button className="py-2 px-8 lg:py-3 lg:px-14 bg-red-100 text-xl lg:text-2xl font-semibold text-[#E32F22] lobster-font relative">Menu</button>
                        </div>
                    </div>

                </div>
                <div className="h-[500px] lg:h-[750px] ">
                    <img src="https://i.ibb.co/vwpF3VF/image-4.png" className="w-full h-full object-cover" />
                    <div className="absolute w-full top-1/2 text-center -translate-y-1/2 z-20 px-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium">Pizza Perfection Slice into Delight</h1>
                        <p className="text-white max-w-2xl mx-auto mt-4">Experience the magic of pizza done right. Our artisanal pies are crafted with the finest ingredients and cooked to crispy, cheesy perfection. Unleash your cravings and savor the essence of authentic pizza bliss</p>
                        <div className="relative max-w-fit mx-auto mt-10">
                            <span className="w-full h-full absolute border-4 border-red-100 -right-2 -bottom-2 z-0"></span>
                            <button className="py-2 px-8 lg:py-3 lg:px-14 bg-red-100 text-xl lg:text-2xl font-semibold text-[#E32F22] lobster-font relative">Menu</button>
                        </div>
                    </div>
                </div>
                <div className="h-[500px] lg:h-[750px] ">
                    <img src="https://i.ibb.co/0GTbT61/image-3.png" className="w-full h-full object-cover" />
                    <div className="absolute w-full top-1/2 text-center -translate-y-1/2 z-20 px-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium">Gourmet Burger Craftsmanship</h1>
                        <p className="text-white max-w-2xl mx-auto mt-4">Experience the pinnacle of burger artistry. Our gourmet burgers are meticulously created to satisfy the most discerning palates, embodying the essence of culinary excellence</p>
                        <div className="relative max-w-fit mx-auto mt-10">
                            <span className="w-full h-full absolute border-4 border-red-100 -right-2 -bottom-2 z-0"></span>
                            <button className="py-2 px-8 lg:py-3 lg:px-14 bg-red-100 text-xl lg:text-2xl font-semibold text-[#E32F22] lobster-font relative">Menu</button>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;