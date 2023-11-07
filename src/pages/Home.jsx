import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Guide from "../components/Guide";
import TopFoods from "../components/TopFoods";


const Home = () => {
    return (
        <div>
            <div className="mb-[120px]">
                <Banner />
                <Categories />
                <Guide />
                <TopFoods />
            </div>
        </div>
    );
};

export default Home;