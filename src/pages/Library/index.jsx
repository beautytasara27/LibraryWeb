import "./index.css";
import { useState } from "react";
const Library = () => {
  const [authors, setAuthors] = useState([
    {
      Name: "Julia Quinn",
      Books: ["Romancing Mr Bridgerton", "Diamond of the first water"],
    },
    {
      Name: "Dan Brown",
      Books: ["Inferno", "Angels and Demons", "Digital Fortress"],
    },
    {
      Name: "Robert Greene",
      Books: ["The 48 Laws Of Power", "The Art of Seduction", "Mastery"],
    },
  ]);
  const [years, setYears] = useState(["2001", "2002", "2003", "2004"]);
  const [isSelectAuthorOpen, setIsSelectAuthorOpen] = useState(true);
  const [currentAuthor, setCurrentAuthor] = useState("Select Author");
  const [isSelectYearOpen, setIsSelectYearOpen] = useState(true);
  const [currentYear, setCurrentYear] = useState("Select Year");
  return (
    <div className="w-full">
      <div className="w-full flex justify-between">
        <div className="w-full max-w-6xl">
          <div className="flex justify-end font-poppins-regular">
            <div className="w-1/3">
              <div className="p-5 text-black bg-white rounded-[50px] shadow-md h-screen">
                <div className="relative">
                  <h2 className="font-poppins-bold mb-4">Author</h2>
                  <button
                    className="mb-4 border w-full text-start pl-10 py-2"
                    onClick={() => setIsSelectAuthorOpen(!isSelectAuthorOpen)}
                  >
                    {currentAuthor}
                  </button>
                  {isSelectAuthorOpen && (
                    <div className="shadow-md  border py-2 px-5 absolute top-[100px] w-full z-10 bg-white">
                      <ul>
                        <li
                          className="border-b py-2 italic"
                          onClick={() => setCurrentAuthor("Select Author")}
                        >
                          Reset
                        </li>
                        {authors.map((author) => (
                          <li
                            className="border-b py-2"
                            onClick={() => setCurrentAuthor(author.Name)}
                          >
                            {author.Name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <h2 className="font-poppins-bold mb-4">Year</h2>
                  <button
                    className="mb-4 border w-full text-start pl-10 py-2"
                    onClick={() => setIsSelectYearOpen(!isSelectYearOpen)}
                  >
                    {currentYear}
                  </button>
                  {isSelectYearOpen && (
                    <div className="shadow-md  border py-2 px-5 absolute top-[100px] w-full bg-white">
                      <ul>
                        <li
                          className="border-b py-2 italic"
                          onClick={() => setCurrentYear("Select Year")}
                        >
                          Reset
                        </li>
                        {years.map((year) => (
                          <li
                            className="border-b py-2"
                            onClick={() => setCurrentAuthor(year)}
                          >
                            {year}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-2/3"></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Library;
