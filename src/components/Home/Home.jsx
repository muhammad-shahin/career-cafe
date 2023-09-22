import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <div className="container mx-auto lg:w-full w-[90%]">
        <JobCategory></JobCategory>
        <FeaturedJobs></FeaturedJobs>
      </div>
    </main>
  );
};

export default Home;
