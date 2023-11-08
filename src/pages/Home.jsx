import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Guide from "../components/Guide";
import Newsletter from "../components/Newsletter";
import TopFoods from "../components/TopFoods";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>AL-AMAL || Home</title>
            </Helmet>
            <div>
                <Banner />
                <Categories />
                <Guide />
                <TopFoods />
                <Newsletter />
            </div>
        </div>
    );
};

export default Home;