import PropTypes from 'prop-types';
import { BiSolidTrashAlt } from "react-icons/bi";
import { PiGearFineBold } from "react-icons/pi";
import useAxios from '../hooks/useAxios';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const MyFoodCard = ({ myFood, refetch }) => {
    const { _id, name, image, category, price, quantity, ingredients, procedure } = myFood;
    const axios = useAxios()

    const handleDeleteFood = () => {
        axios.delete(`/foods/${_id}`)
            .then(res => {
                console.log(res.data);
                toast.success("Your Order has been Cancelled Successfully");
                refetch();
            })
            .catch(error => {
                toast.error(error.message)
            });
    };

    return (
        <div className="w-full">
            <div className='grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-4'>
                <figure className='h-[200px] md:h-[300px] md:col-span-2 xl:col-span-1'><img src={image} alt={`image of ${name}`} className='w-full h-full object-cover rounded-xl lg:rounded-r-none' /></figure>
                <div className="flex flex-col p-4 lg:p-0 xl:p-4 md:col-span-3 xl:col-span-2">
                    <h2 className="text-2xl md:text-3xl font-bold">{name}</h2>
                    <h2 className="text-base md:text-lg font-medium mb-1">Category: <span className='text-slate-400 font-bold'>{category}</span></h2>
                    <h2 className='text-base md:text-lg font-medium mb-1'>Price: <span className='text-[#E32F22]'>${price}</span></h2>
                    <h3 className="text-base md:text-lg font-medium mb-1">
                        Ingredients:
                        <span>
                            {
                                ingredients?.map((ingredient, index) => <strong key={index} className='text-slate-400'> {ingredient}, </strong>)
                            }
                        </span>
                    </h3>
                    <h2 className='text-base md:text-lg font-medium flex-grow'>Quantity: <span className='text-[#E32F22]'>{quantity}</span></h2>
                    <h2 className='text-base md:text-lg font-medium flex-grow'>Procedure: <span className='text-slate-400'>{procedure}</span></h2>
                    <div className="card-actions justify-end items-center mt-4 lg:mt-0">
                        <Link to={`/myFoods/${_id}`}>
                            <button className="btn btn-primary text-white"><PiGearFineBold className='text-xl' /> Update</button>
                        </Link>
                        <button onClick={handleDeleteFood} className="btn btn-error text-white"><BiSolidTrashAlt className='text-xl' /> Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

MyFoodCard.propTypes = {
    myFood: PropTypes.object,
    refetch: PropTypes.func,
}

export default MyFoodCard;