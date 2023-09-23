import PropTypes from "prop-types";
import locationIcon from "../../../public/icons/Location2.png";
import salaryIcon from "../../../public/icons/money.png";
import { useNavigate } from "react-router-dom";

const ShowAppliedJobs = ({ job }) => {
  const {
    id,
    job_title,
    company_name,
    company_logo,
    location,
    salary,
    job_type,
  } = job;
  const navigate = useNavigate();
  const handleJobDetails = (id) => {
    navigate(`/job-details/${id}`);
  };
  return (
    <section className="flex lg:flex-row flex-col lg:justify-start justify-center items-center lg:gap-10 gap-4 border-4 p-5 lg:pr-10 rounded-lg">
      <div className="rounded-lg bg-[#F4F4F4] px-10 py-20 w-[240px]">
        <img className="lg:mx-0 mx-auto" src={company_logo} alt="" />
      </div>
      <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center w-full">
        <div className="text-center lg:text-left">
          <h4 className="text-[24px] font-medium mb-2">{job_title}</h4>
          <p className="text-[#757575] text-[20px] font-semibold mb-6">
            {company_name}
          </p>
          <div className="mb-4">
            <button className="px-5 py-1 text-[#9873FF] rounded font-medium border border-[#9873FF] mr-5 capitalize">
              {job_type}
            </button>
            <button className="px-5 py-1 text-[#9873FF] rounded font-medium border border-[#9873FF]">
              Full Time
            </button>
          </div>
          <div className="flex lg:justify-start justify-center gap-8 items-center mb-8 lg:flex-row flex-col">
            <div className="flex gap-2 ">
              <img className="object-cover" src={locationIcon} />
              <p className="text-[#757575] text-[20px]">{location}</p>
            </div>

            <div className="flex gap-2">
              <img className="object-cover" src={salaryIcon} />
              <p className=" text-[#757575] text-[20px]">{salary}</p>
            </div>
          </div>
        </div>
        <div>
          <button
            className="px-5 py-2 rounded-md border-none text-white text-[20px] font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873ff] hover:bg-gradient-to-r hover:from-[#7E90FE] hover:to-[#7E90FE]"
            onClick={() => {
              handleJobDetails(id);
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </section>
  );
};

ShowAppliedJobs.propTypes = {
  job: PropTypes.object.isRequired,
};

export default ShowAppliedJobs;
