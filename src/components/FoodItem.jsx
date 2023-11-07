import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FoodItem = ({ foodItem }) => {
    const { _id, name, image, price, category, quantity } = foodItem;

    return (
        <div className="card card-compact bg-base-100">
            <figure className='h-[250px] md:h-[350px] lg:h-[250px]'><img src={image} alt={`image of ${name}`} className='w-full h-full object-cover rounded-xl' /></figure>
            <div className="card-body">
                <h2 className="text-[#465058] text-xl lg:text-2xl font-medium text-center">{name}</h2>
                <p className='text-[#F76F2A] text-lg lg:text-xl font-bold text-center flex-grow'>${price}</p>
                <div className="card-actions justify-between items-center">
                    <div>
                        <p className='text-sm font-medium lg:font-bold text-slate-500'>Category: {category}</p>
                        <p className='text-sm font-medium lg:font-bold text-slate-500'>Quantity: {quantity}</p>
                    </div>
                    <Link to={`/allFoods/${category}/${_id}`}>
                        <button className="btn bg-red-100 lobster-font text-[#E32F22] rounded-none normal-case">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

FoodItem.propTypes = {
    foodItem: PropTypes.object,
}

export default FoodItem;