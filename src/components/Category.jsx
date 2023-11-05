import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ categoryObj }) => {
    const { category, image } = categoryObj;

    return (
        <Link to={`/foodItems`} className="card card-compact bg-white rounded-xl mr-6">
            <div className="text-center relative rounded-xl">
            <figure className='h-[250px]'><img src={image} alt={`image of ${category}`} className='w-full h-full object-cover' /></figure>
                <h1 className='text-2xl absolute w-full bottom-0 left-1/2 -translate-x-1/2 bg-white py-2 px-4'>{category}</h1>
            </div>
        </Link>
    );
};

Category.propTypes = {
    categoryObj: PropTypes.object,
}

export default Category;