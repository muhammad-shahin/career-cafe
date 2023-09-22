import PropTypes from "prop-types";

const SectionHeader = ({ sectionTitle, sectionDescription }) => {
  return (
    <div className="text-center">
      <h2 className="text-[3rem] lg:text-[4rem] font-bold">{sectionTitle}</h2>
      <p className="text-[#757575]">{sectionDescription}</p>
    </div>
  );
};

SectionHeader.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  sectionDescription: PropTypes.string.isRequired,
};

export default SectionHeader;
