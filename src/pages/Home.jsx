import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Guide from "../components/Guide";


const Home = () => {
    return (
        <div>
            <div className="mb-[120px]">
                <Banner />
                <Categories />
                <Guide />
            </div>
        </div>
    );
};

export default Home;