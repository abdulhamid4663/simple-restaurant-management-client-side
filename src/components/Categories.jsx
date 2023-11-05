import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Category from "./Category";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Categories = () => {
    const axios = useAxios();

    const { data, isLoading, isError } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await axios.get('/categories')
            return res
        }
    })

    console.log(data?.data);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="container mx-auto px-4 my-[120px]">
            <h1 className="text-[#E32F22] lobster-font text-4xl md:text-5xl lg:text-6xl text-center">Savor the Variety</h1>
            <p className="text-center max-w-lg mx-auto text-[#9A9A9A] text-sm md:text-base font-medium mt-4">Explore a diverse culinary journey with our extensive menu, offering something for everyone</p>
            <div className="mt-[50px]">
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