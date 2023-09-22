import PropTypes from "prop-types";

const CategoryList = ({ icon, category, availableJobs }) => {
  return (
    <div className="p-10 bg-[#eaecf7] rounded w-[300px]">
      <div className="bg-[#cfd5f5] rounded w-fit">
      <img className="mb-5 p-4" src={icon}  alt="Category Icon" />
      </div>
      <h4 className="text-[20px] font-semibold mb-2">{category}</h4>
      <p className="text-[#A3A3A3] font-medium">
        {availableJobs} Jobs Available
      </p>
    </div>
  );
};

CategoryList.propTypes = {
  icon: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  availableJobs: PropTypes.string.isRequired,
};

export default CategoryList;
