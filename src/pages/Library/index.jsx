import "./index.css";
const Library = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center bg-black">
        <div className="max-w-6xl">
          <h1 className="font-poppins-bold text-[51px] leading-[72px] text-center mt-14 text-indigo-500 bg-red-500">
            Our Library
          </h1>
          <p className="text-lg font-poppins-regular  my-12 text-center mx-24">
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris
          </p>
          <form claassName="mb-10">
          <div className="flex space-x-4"><input className="p-4" placeholder="Name"/><input className="p-4" placeholder="Email"/></div>
          </form>
        </div>
      </div>
      <div class="heart-shape"></div>
    </div>
  );
};
export default Library;
