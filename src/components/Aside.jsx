import { IoIosCheckmarkCircle } from "react-icons/io";
import useCategories from "../hooks/useCategories";
import PropTypes from 'prop-types';

const Aside = ({ handleCategories }) => {
    const { data } = useCategories();

    return (
        <div className="bg-base-200 rounded-xl py-[50px] px-4 lg:pl-8 sticky top-24">
            <h2 className="text-[30px] text-[#414549] font-medium">Categories</h2>
            <dir>
                {
                    data?.data?.map(category =>
                        <div key={category._id} className="flex items-center gap-2">
                            <IoIosCheckmarkCircle className="text-[#E32F22]" />
                            <button onClick={() => handleCategories(category.category)} className="block text-sm font-bold text-[#414549] mb-1 hover:text-[#E32F22] transition-all ease-in-out">
                                {category.category}
                            </button>
                        </div>
                    )
                }
            </dir>
        </div>
    );
};

Aside.propTypes = {
    handleCategories: PropTypes.func,
}

export default Aside;