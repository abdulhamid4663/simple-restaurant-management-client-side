import { useParams } from "react-router-dom";


const FoodItems = () => {
    const { category } = useParams()

    return (
        <div className="container mx-auto px-4">
            <h1>{category}</h1>
        </div>
    );
};

export default FoodItems;