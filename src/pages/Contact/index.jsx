const Contact = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center bg-black ">
        <div className="w-full">
          <h1 className="font-poppins-bold text-[51px] leading-[72px] text-center text-white bg-havelock bg-opacity-90 py-14">
            Contact Us
          </h1>
          <div className="flex justify-center bg-black ">
            <div className="w-full max-w-6xl">
              <form className="mx-2 sm:mx-0">
                <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-4 lg:space-y-0 my-4 lg:my-10 w-full">
                  <input className="p-2 lg:p-4 lg:w-1/2" placeholder="Name" />
                  <input className="p-2 lg:p-4 lg:w-1/2" placeholder="Email" />
                </div>
                <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-4 lg:space-y-0 lg:my-10 w-full">
                  <input className="p-2 lg:p-4 lg:w-1/2" placeholder="Phonenumber" />
                  <input className="p-2 lg:p-4 lg:w-1/2" placeholder="Subject" />
                </div>
                <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 lg:my-10 my-4 w-full">
                  <textarea className="p-2 lg:p-4 w-full" placeholder="Message" rows="4"/>
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="py-4 px-16 my-6 lg:my-14 text-white bg-havelock hover:bg-white hover:text-black">
              Send
            </button>
          </div>
        </div>
      </div>
      <div class="heart-shape"></div>
    </div>
  );
};
export default Contact;
