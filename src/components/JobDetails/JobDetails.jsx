import { useLoaderData, useParams } from "react-router-dom";
import "./JobDetails.css";
import salaryIcon from "../../../public/icons/money.png";
import calenderIcon from "../../../public/icons/calendar.png";
import phoneIcon from "../../../public/icons/phone.png";
import emailIcon from "../../../public/icons/email.png";
import locationIcon from "../../../public/icons/location2.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  const { jobId } = useParams();
  const job = jobDetails.find((job) => job.id === jobId);
  const {
    company_logo,
    contact_information,
    educational_requirements,
    experiences,
    job_description,
    job_responsibility,
    job_title,
    salary,
  } = job;
  const handleApplyJob = () => {
    toast.success("You Have Applied Successfully");
    saveJobApplication(jobId);
  };
  return (
    <section>
      {/* job details top section */}
      <div className="w-full text-center py-10 flex justify-center items-center bg-img my-10 ">
        <div className="space-y-3">
          <h2 className="lg:text-[4rem] text-[2rem] mb-8 font-bold text-[#1A1919]">
            Job Details
          </h2>
          <img
            className="mx-auto lg:w-[180px] "
            src={company_logo}
            alt="Company Logo"
          />
          <h3 className="lg:text-[2rem] text-[1.5rem] font-bold text-[#7E90FE]">
            {job_title}
          </h3>
        </div>
      </div>
      <section className="flex lg:flex-row flex-col justify-between gap-20 lg:items-start items-center container mx-auto my-20 lg:w-full w-[90%]">
        {/* job details -details section */}
        <div className="">
          <p className="text-[22px] font-medium text-[#1A1919] max-w-5xl mb-6">
            Job Description:{" "}
            <span className="text-[20px] font-medium text-[#757575]">
              {job_description}
            </span>
          </p>
          <p className="text-[22px] font-medium text-[#1A1919] max-w-5xl mb-6">
            Job Responsibility:{" "}
            <span className="text-[20px] font-medium text-[#757575]">
              {job_responsibility}
            </span>
          </p>
          <p className="text-[22px] font-medium text-[#1A1919] max-w-5xl mb-4">
            Educational Requirements:
            <p className="text-[20px] font-medium text-[#757575]">
              {educational_requirements}
            </p>
          </p>
          <p className="text-[22px] font-medium text-[#1A1919] max-w-5xl">
            Experience:
            <p className="text-[20px] font-medium text-[#757575]">
              {experiences}
            </p>
          </p>
        </div>
        {/* job details sidebar section */}
        <div className=" space-y-8">
          <div className="p-10 rounded-s-lg bg-color">
            <p className="text-[22px] font-bold text-[#1A1919] mb-4">
              Job Details
            </p>
            <hr className="mb-4" />
            <div className="flex gap-2">
              <img className="object-contain w-[32px]" src={salaryIcon} />
              <p className=" text-[#757575] text-[20px] font-medium">
                <span className="text-[20px] font-medium text-[#1A1919] max-w-5xl mr-1">
                  Salary:
                </span>
                {salary}
              </p>
            </div>
            <div className="flex gap-2 my-4">
              <img className="object-contain w-[32px]" src={calenderIcon} />
              <p className="text-[#757575] text-[20px] font-medium">
                <span className="text-[20px] font-medium text-[#1A1919] max-w-5xl mr-1">
                  Job Title:
                </span>
                {job_title}
              </p>
            </div>
            <p className="text-[22px] font-bold text-[#1A1919] mb-4">
              Contact Information
            </p>
            <hr className="mb-4" />
            <div className="flex gap-2">
              <img className="object-contain w-[32px]" src={phoneIcon} />
              <p className=" text-[#757575] text-[20px] font-medium">
                <span className="text-[20px] font-medium text-[#1A1919] max-w-5xl mr-1">
                  Phone:
                </span>
                {contact_information.phone}
              </p>
            </div>
            <div className="flex gap-2 my-4">
              <img className="object-contain w-[32px]" src={emailIcon} />
              <p className="text-[#757575] text-[20px] font-medium">
                <span className="text-[20px] font-medium text-[#1A1919] max-w-5xl mr-1">
                  Email:
                </span>
                {contact_information.email}
              </p>
            </div>
            <div className="flex gap-2 my-4">
              <img className="object-contain w-[32px]" src={locationIcon} />
              <p className="text-[#757575] text-[20px] font-medium">
                <span className="text-[20px] font-medium text-[#1A1919] max-w-5xl mr-1">
                  Address:
                </span>
                {contact_information.address}
              </p>
            </div>
          </div>
          <div className="text-center">
            <button
              className="px-5 py-4 w-full rounded-md border-none text-white text-[20px] font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873ff] hover:bg-gradient-to-r hover:from-[#7E90FE] hover:to-[#7E90FE]"
              onClick={handleApplyJob}
            >
              Start Applying
            </button>
          </div>
        </div>
        <ToastContainer autoClose={3000} />
      </section>
    </section>
  );
};

export default JobDetails;
