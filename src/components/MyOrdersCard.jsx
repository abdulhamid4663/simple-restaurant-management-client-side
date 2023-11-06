import PropTypes from 'prop-types';

const MyOrdersCard = ({ order, handleCancel }) => {
    const { _id, foodName, image, itemPrice, quantity, date, totalPrice } = order;

    return (
        <div className="w-full">
            <div className='grid grid-cols-1 md:grid-cols-5 xl:grid-cols-3 gap-4'>
                <figure className='h-[200px] lg:h-[300px] md:col-span-2 xl:col-span-1'><img src={image} alt={`image of ${foodName}`} className='w-full h-full object-cover rounded-xl md:rounded-r-none' /></figure>
                <div className="flex flex-col p-6 md:col-span-3 xl:col-span-2">
                    <div className='flex items-center justify-between mb-4'>
                        <h2 className="text-2xl md:text-3xl font-bold">{foodName}</h2>
                        <span className='text-sm lg:text-base'>{date}</span>
                    </div>
                    <h2 className='text-base md:text-lg font-medium mb-2'>Single: {itemPrice}</h2>
                    <h2 className='text-base md:text-lg font-medium flex-grow'>Quantity: {quantity}</h2>
                    <div className="card-actions justify-between items-center">
                        <h2 className='flex-grow text-xl md:text-2xl text-[#E32F22]'>Total Price: ${totalPrice}</h2>
                        <button onClick={() => handleCancel(_id)} className="btn btn-error text-white">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

MyOrdersCard.propTypes = {
    order: PropTypes.object,
    handleCancel: PropTypes.func,
}

export default MyOrdersCard;