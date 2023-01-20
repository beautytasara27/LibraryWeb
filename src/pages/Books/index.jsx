import Book1 from "../../assets/images/book-1.jpg";
import Book2 from "../../assets/images/book-2.jpg";
const Books = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl">
          <h1 className="font-poppins-bold text-[51px] leading-[72px] text-center mt-14 text-havelock">
            Our Books
          </h1>
          <p className="text-lg font-poppins-regular mx-4 my-12 text-center lg:mx-24">
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris
          </p>
          <div className="mx-4 flex flex-col lg:flex-row space-y-4 lg:justify-between items-center">
            <div className="rounded-[10px] lg:p-10 bg-white">
              <img src={Book1} />
            </div>
            <div className="rounded-[10px] lg:p-10 bg-white">
              <img src={Book2} />
            </div>
            <div className="rounded-[10px] lg:p-10 bg-white">
              <img src={Book1} />
            </div>
          </div>
          <p className="text-lg font-poppins-regular my-6 lg:my-0 text-center mx-4 lg:mx-72">
            magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation
            ullamco laboris
          </p>
          <div className="flex justify-center mb-10">
            <button className=" py-4 px-10 my-6 lg:my-0 lg:mt-14 text-white border rounded-[50px] bg-havelock hover:bg-black hover:border-0">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Books;
