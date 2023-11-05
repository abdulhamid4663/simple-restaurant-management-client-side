import PropTypes from 'prop-types';

const FoodItem = ({ foodItem }) => {
    const { name, image, price, category, quantity } = foodItem;

    return (
        <div>
            <div className="card card-compact bg-base-100">
                <figure className='h-[230px]'><img src={image} alt={`image of ${name}`} className='w-full h-full object-cover rounded-xl' /></figure>
                <div className="card-body">
                    <h2 className="text-[#465058] text-2xl font-medium text-center">{name}</h2>
                    <p className='text-[#F76F2A] text-xl font-bold text-center'>${price}</p>
                    <div className="card-actions justify-between items-center">
                        <div>
                            <p className='text-sm font-bold text-slate-500'>Category: {category}</p>
                            <p className='text-sm font-bold text-slate-500'>Quantity: {quantity}</p>
                        </div>
                        <button className="btn bg-red-100 rounded-none normal-case">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

FoodItem.propTypes = {
    foodItem: PropTypes.object,
}

export default FoodItem;