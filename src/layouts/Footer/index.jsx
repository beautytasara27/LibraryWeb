import Instagram from "../../assets/icon/instagram.png";
import Facebook from "../../assets/icon/facebook.png";
import Linkedin from "../../assets/icon/linkedin.png";
import Twitter from "../../assets/icon/twitter.png";
function Footer() {
  return (
    <div className="w-full flex justify-center bg-gradient-to-b from-malibu via-havelock to-deep">
      <div className="w-full max-w-6xl px-2 sm:px-0 ">
        <div className="sm:flex justify-between py-4 sm:py-14 w-full">
          <div className="flex flex-col w-1/3">
            <h2 className="text-2xl underline underline-offset-8  font-poppins-bold">
              Follow Us
            </h2>{" "}
            <div className="flex space-x-4 mt-8">
              <img src={Instagram} alt="instagram" />
              <img src={Facebook} alt="facebook" />
              <img src={Linkedin} alt="linkedin" />
              <img src={Twitter} alt="twitter" />
            </div>
          </div>
          <div className="w-full sm:w-2/3 mt-8 sm:mt-0">
            <h2 className="text-2xl underline underline-offset-8  font-poppins-bold">
              Newsletter
            </h2>{" "}
            <div className="flex mt-8">
              <input
                type="email"
                className="p-2 lg:p-3 w-full text-black"
                placeholder="Email"
              />
              <button className="bg-black text-white px-10"> Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
