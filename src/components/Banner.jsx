import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="overflow-hidden">
            <Slider {...settings}>
                <div className="h-[500px] lg:h-[750px] relative">
                    <img src="https://i.ibb.co/jgfY83t/image-5.png" className="w-full h-full object-cover bg-black bg-blend-multiply" />
                    <div className="absolute w-full top-1/2 text-center -translate-y-1/2 z-20">
                        <h1 className="text-4xl text-white font-semibold">We get what you love</h1>
                    </div>
                </div>
                <div className="h-[500px] lg:h-[750px]">
                    <img src="https://i.ibb.co/vwpF3VF/image-4.png" className="w-full h-full object-cover bg-black bg-blend-multiply" />
                </div>
                <div className="h-[500px] lg:h-[750px]">
                    <img src="https://i.ibb.co/0GTbT61/image-3.png" className="w-full h-full object-cover bg-black bg-blend-multiply" />
                </div>
            </Slider>
        </div>
    );
};

export default Banner;