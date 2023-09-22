const Banner = () => {
  return (
    <section className="bg-[#eaecf7]">
    <div className="container mx-auto lg:w-full lg:px-0 px-[5%] lg:py-0 py-[5%]  flex justify-between items-center ">
      {/* left side content */}
      <div className="spay">
        <h1 className="lg:text-[5rem] text-[3rem] font-bold max-w-xl">
          One Step Closer To Your{" "}
          <span className="text-[#9873ff]">Dream Job</span>
        </h1>
        <p className="text-[18px] font-medium text-[#757575] max-w-lg my-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="px-5 py-2 rounded-md border-none text-white text-[20px] font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873ff] hover:bg-gradient-to-r hover:from-[#7E90FE] hover:to-[#7E90FE]">
          Get Started
        </button>
      </div>
      {/* Right side content */}
      <div className="lg:block hidden">
        <img src="../../../public/images/user.png" alt="" />
      </div>
    </div>
    </section>
  );
};

export default Banner;
