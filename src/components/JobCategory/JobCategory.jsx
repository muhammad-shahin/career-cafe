import CategoryList from "../CategoryList/CategoryList";
import SectionHeader from "../SectionHeader/SectionHeader";
import accountIcon from "../../../public/icons/accounts.png";
import creativeIcon from "../../../public/icons/creative.png";
import marketingIcon from "../../../public/icons/marketing.png";
import chipIcon from "../../../public/icons/chip.png";

const JobCategory = () => {
  return (
    <section className="mt-10 lg:mb-32 mb-10 ">
      <SectionHeader
        sectionTitle={"Job Category List"}
        sectionDescription={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      ></SectionHeader>
      <div className="flex flex-wrap lg:justify-between justify-center items-center my-10 gap-5 lg:gap-0 ">
        <CategoryList
          icon={accountIcon}
          category="Account & Finance"
          availableJobs="300"
        ></CategoryList>
        <CategoryList
          icon={creativeIcon}
          category="Creative Design"
          availableJobs="100+"
        ></CategoryList>
        <CategoryList
          icon={marketingIcon}
          category="Marketing & Sales"
          availableJobs="150"
        ></CategoryList>
        <CategoryList
          icon={chipIcon}
          category="Engineering Job"
          availableJobs="250"
        ></CategoryList>
      </div>
    </section>
  );
};

export default JobCategory;
