import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <FeaturedJobs></FeaturedJobs>
    </main>
  );
};

export default Home;
