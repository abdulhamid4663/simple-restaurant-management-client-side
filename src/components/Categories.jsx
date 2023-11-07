/* eslint-disable react/prop-types */
import Category from "./Category";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useCategories from "../hooks/useCategories";


const Categories = () => {
    const { data } = useCategories();

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{...style, display: "block", background: "#E32F22", borderRadius: "60%"}}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#E32F22", borderRadius: "60%"}}
                onClick={onClick}
            />
        );
    }

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "ease-in-out",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerPadding: "0px",
              }
            },
        ]
    };

    return (
        <div className="container mx-auto px-4 my-[120px]">
            <h1 className="text-[#E32F22] lobster-font text-4xl md:text-5xl lg:text-6xl text-center">Savor the Variety</h1>
            <p className="text-center max-w-lg mx-auto text-[#9A9A9A] text-sm md:text-base font-medium mt-4">Explore a diverse culinary journey with our extensive menu, offering something for everyone</p>
            <div className="mt-[50px] px-4">
                <Slider {...settings}>
                    {
                        data?.data?.map(category => <Category key={category._id} categoryObj={category} />)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Categories;