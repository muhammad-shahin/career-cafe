import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../components/JobDetails/JobDetails.css";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import dropDownIcon from "../../../public/icons/downarrow.svg";
import ShowAppliedJobs from "./ShowAppliedJobs";
const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  useEffect(() => {
    const storedJobsId = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobsId.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  //   Drop down menu
  const [openMenu, setOpenMenu] = useState(false);
  const [filter, setFilter] = useState("");
  const handleSelectOption = (event) => {
    const text = event.target.textContent;
    setFilter(text);
  };
  useEffect(() => {
    if (filter === "All") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "Remote") {
      const remoteJobs = appliedJobs.filter((job) => job.job_type === "remote");
      setDisplayJobs(remoteJobs);
    } else if (filter === "Onsite") {
      const onsiteJobs = appliedJobs.filter((job) => job.job_type === "onsite");
      setDisplayJobs(onsiteJobs);
    }
  }, [filter]);

  if (displayJobs.length > 0) {
    return (
      <section>
        <div className="w-full text-center py-32 flex justify-center items-center bg-img my-10 ">
          <div className="space-y-3">
            <h2 className="lg:text-[4rem] text-[2rem] mb-8 font-bold text-[#1A1919]">
              Applied Jobs
            </h2>
          </div>
        </div>
        {/* applied jobs cards */}
        <div className="container mx-auto lg:w-full w-[90%] mb-10 mt-20">
          {/* drop down menu */}
          <div className="flex justify-end mb-5">
            <div
              className="bg-[#7E90FE] w-[150px] h-[60px] px-8 py-2 rounded-lg relative flex justify-center gap-3 items-center"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <p className="text-[24px] font-medium text-white">Filter</p>
              <img src={dropDownIcon} />
              <ul
                className={`${
                  openMenu ? "block" : "hidden"
                } absolute top-[60px] left-[12px] bg-[#7E90FE] p-5`}
              >
                <li
                  className="text-[24px] font-medium text-white cursor-pointer"
                  onClick={handleSelectOption}
                >
                  All
                </li>
                <li
                  className="text-[24px] font-medium text-white cursor-pointer"
                  onClick={handleSelectOption}
                >
                  Remote
                </li>
                <li
                  className="text-[24px] font-medium text-white cursor-pointer"
                  onClick={handleSelectOption}
                >
                  Onsite
                </li>
              </ul>
            </div>
          </div>
          {/* cards */}
          <div className=" space-y-6">
            {displayJobs.map((job) => (
              <ShowAppliedJobs key={job.id} job={job}></ShowAppliedJobs>
            ))}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center space-y-4">
        <h1 className="text-[#9873ff] font-bold text-[52px]">
          You Didn't Apply for Any Job Yet!
        </h1>
        <p className="text-[#9873ff] font-bold text-[32px] max-w-2xl text-center">
          You can apply for jobs. Go to Home page to see the latest Job listings
        </p>
        <button className="px-5 py-3 rounded-md border-none text-white text-[20px] font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873ff]">
          <NavLink to="/">Start Applying</NavLink>
        </button>
      </div>
    );
  }
};

export default AppliedJobs;
