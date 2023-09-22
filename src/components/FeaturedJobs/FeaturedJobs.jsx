import { useState, useEffect } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import ShowFeaturedJobs from "./ShowFeaturedJobs";

const FeaturedJobs = () => {
  const [jobs, SetJobs] = useState([]);
  // slicing the data to 4 to show initially (not the best way, best way is pagination)
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("featured-job.json")
      .then((res) => res.json())
      .then((data) => SetJobs(data));
  }, []);
  console.log(jobs);
  return (
    <section className="my-10">
      <SectionHeader
        sectionTitle="Featured Jobs"
        sectionDescription="Explore thousands of job opportunities with all the information you need. Its your future"
      ></SectionHeader>
      <div className="container mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 grid-flow-row my-10">
        {jobs.slice(0, dataLength).map((job) => (
          <ShowFeaturedJobs key={job.id} job={job}></ShowFeaturedJobs>
        ))}
      </div>
      <button
        className={`${
          dataLength === 4 ? "block" : "hidden"
        } px-5 py-2 rounded-md border-none text-white text-[20px] font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873ff] hover:bg-gradient-to-r hover:from-[#7E90FE] hover:to-[#7E90FE] mx-auto`}
        onClick={() => {
          setDataLength(8);
        }}
      >
        Show All Jobs
      </button>
    </section>
  );
};

export default FeaturedJobs;
