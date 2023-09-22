import PropTypes from "prop-types";
import locationIcon from "../../../public/icons/Location2.png";
import salaryIcon from "../../../public/icons/money.png";

const ShowFeaturedJobs = ({ job }) => {
  const { job_title, company_name, company_logo, location, salary, job_type } =
    job;
  return (
    <div className="p-8 border border-gray-300 rounded min-h-[380px]">
      <img className="mb-8" src={company_logo} alt="Company Logo" />
      <h4 className="text-[24px] font-medium mb-2">{job_title}</h4>
      <p className="text-[#757575] text-[20px] font-semibold mb-6">{company_name}</p>
      <div className="mb-4">
        <button className="px-5 py-1 text-[#9873FF] rounded font-medium border border-[#9873FF] mr-5 capitalize">
          {job_type}
        </button>
        <button className="px-5 py-1 text-[#9873FF] rounded font-medium border border-[#9873FF]">
          Full Time
        </button>
      </div>
      <div className="flex justify-start gap-8 items-center mb-8 flex-wrap">
        <div className="flex gap-2 ">
          <img className="object-cover" src={locationIcon} />
          <p className="text-[#757575] text-[20px]">{location}</p>
        </div>

        <div className="flex gap-2">
          <img className="object-cover" src={salaryIcon} />
          <p className=" text-[#757575] text-[20px]">{salary}</p>
        </div>
      </div>
      <button className="px-5 py-1 rounded-md border-none text-white text-[20px] font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873ff] hover:bg-gradient-to-r hover:from-[#7E90FE] hover:to-[#7E90FE]">
        View Details
      </button>
    </div>
  );
};

ShowFeaturedJobs.propTypes = {
  job: PropTypes.object.isRequired,
};

export default ShowFeaturedJobs;
