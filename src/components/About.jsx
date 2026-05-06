const About = () => {
  return (
    <div id="about">
      <div className=" bg-black mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="font-base badge"> Best Coffee</p>
            <h2 className="text-4xl text-gradient font-base ml-15 mt-5 mb-5">
              For your eerie coffee experience
              <span className="text-white">-</span> From bean to brew
            </h2>
          </div>
          <div className="sub-content">
            <p>
              We trace every bean back to the hands that grew it, the soil that
              shaped it, and the roast that brought it to life. This is coffee
              without compromise — distinctive, complex, and worth slowing down
              for.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
