import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NoAppliedJobs = ({ message }) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center space-y-4">
      <h1 className="text-[#9873ff] font-bold text-[52px]">
        You Did not Apply for Any <span className="text-[#f987ff]">{message && message}</span> Job Yet!
      </h1>
      <p className="text-[#9873ff] font-bold text-[32px] max-w-2xl text-center">
        You can apply for <span className="text-[#f987ff]">{message && message}</span> jobs. Go to
        Home page to see the latest Job listings
      </p>
      <button className="px-5 py-3 rounded-md border-none text-white text-[20px] font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873ff]">
        <NavLink to="/featured-jobs">Start Applying</NavLink>
      </button>
    </div>
  );
};

NoAppliedJobs.propTypes = {
  message: PropTypes.string,
};

export default NoAppliedJobs;
