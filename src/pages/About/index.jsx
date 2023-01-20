import BookPile from "../../assets/images/about.png";
import HomeImage2 from "../../assets/images/home_bg2.jpg";
const About = () => {
  return (
    <div className="w-full" style={{ backgroundImage: `url(${HomeImage2})` }}>
      <div className="bg-white bg-opacity-90 w-full flex justify-center ">
        <div className="w-full max-w-6xl">
          <h1 className="font-poppins-bold text-[51px] leading-[72px] text-center mt-14 text-havelock">
            About Us
          </h1>
          <p className="text-lg font-poppins-regular my-6 lg:my-12 text-center mx-5 lg:mx-24">
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris
          </p>
          <div className="lg:grid grid-cols-2 border-2 border-havelock rounded-[50px] p-4 lg:p-10 mx-1 mb-10">
            <div className="flex flex-col ">
              <p className=" text-lg font-poppins-regular text-black text-start">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore
              </p>
              <div className="flex justify-start">
                {" "}
                <button className="py-4 px-10 my-6 lg:mt-14 lg:my-0 text-white bg-havelock border rounded-[50px] hover:bg-black hover:border-0">
                  Read More
                </button>
              </div>
            </div>
            <div className="flex justify-center pb-10 sm:pb-0">
              <img className="" src={BookPile} alt="book pile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
