import "./index.css";
import { useState, useEffect } from "react";
import HomeImage2 from "../../assets/images/home_bg2.jpg";
import BookService from "../../services/API/books.service";
import LibrarySection from "../../components/Catalogue/LibrarySection";
import SearchResults from "../../components/Search/SearchResults";
import { Fragment } from "react";
import Loading from "../../components/Spinner/Loading";
import { Transition } from "@headlessui/react";
const Library = () => {
  const [searchBy, setSeachBy] = useState(["Keyword", "Author", "Title"]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchItem, setSearchItem] = useState("Keyword");
  const [bestSellers, setBestSellers] = useState(null);
  const [librarianPicks, setLibrarianPicks] = useState(null);
  const [topAuthor, setTopAuthor] = useState(null);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searched, setSearched] = useState(false);
  useEffect(() => {
    GetBooks();
    LibrarianPicks();
    TopAuthor();
  }, []);

  const GetBooks = async () => {
    const response = await BookService.GetBooksBySubject({
      subject: "bestseller",
    });
    setBestSellers(response.works);
  };
  const LibrarianPicks = async () => {
    const response = await BookService.GetBooksBySubject({
      subject: "crime",
    });
    setLibrarianPicks(response.works.splice(1, 6));
  };
  const TopAuthor = async () => {
    const response = await BookService.GetBooksBySubject({
      subject: "fantasy",
    });
    setTopAuthor(response.works.splice(1, 6));
  };
  const Search = async () => {
    setSearched(!searched);
    const response = await BookService.GetBooksBySubject({
      subject: searchPhrase,
    });
    console.log(response);
    setSearchResults(response.works.splice(1, 10));
  };
  if (!bestSellers || !librarianPicks || !topAuthor) {
    return (
      <div className="w-full">
        <Loading />
      </div>
    );
  }
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${HomeImage2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full flex justify-center">
        <div className="w-full">
          <div className="font-poppins-regular w-full">
            {!isSearchOpen && (
              <div className="flex justify-end">
                <div
                  className=" flex space-x-3 bg-white bg-opacity-50 backdrop-blur-sm px-4 py-4 rounded-b-[10px]"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <p>Show Search</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
              </div>
            )}
            <Transition show={isSearchOpen}>
              <Transition.Child
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-y-full"
                enterTo="translate-y-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-y-0"
                leaveTo="-translate-y-full"
              >
                {isSearchOpen && (
                  <div>
                    <div className="flex justify-center bg-white bg-opacity-50 backdrop-blur-sm">
                      <div className="p-10 text-black bg-white  shadow-md  w-2/3 mt-10 mb-2 rounded-[20px]">
                        <div className="w-full relative">
                          <h2 className="font-poppins-bold mb-4">
                            Search by ...
                          </h2>
                          <div className="flex justify-between space-x-8">
                            <select className="mb-4 border-2 bg-white border-black w-2/5 text-start pl-2 py-2 h-10">
                              {searchBy.map((searchItem) => (
                                <option
                                  className="py-2 "
                                  onClick={() => setSearchItem(searchItem)}
                                  key={searchItem}
                                >
                                  {searchItem}
                                </option>
                              ))}
                            </select>
                            <input
                              onChange={(e) => setSearchPhrase(e.target.value)}
                              name="searchPhrase"
                              value={searchPhrase}
                              className="border-2 border-black w-full h-10 text-center"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <button
                            onClick={Search}
                            className=" py-3 px-10 my-6 lg:mt-8 text-white bg-havelock hover:bg-black hover:text-white"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {isSearchOpen && (
                  <div className="flex justify-end backdrop-blur-sm">
                    <div
                      className=" flex space-x-3 bg-white bg-opacity-50 backdrop-blur-sm px-4 py-4 rounded-b-[10px]"
                      onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
                      <p>Hide Search</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 15.75l7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </Transition.Child>
            </Transition>
            {isSearchOpen && searched && (
              <SearchResults results={searchResults} searched={searched} />
            )}

            <div className="w-full backdrop-blur-sm flex justify-center ">
              <h1 className="text-9xl font-viva-beautiful text-white italic">
                Catologue
              </h1>
            </div>
            {bestSellers && (
              <LibrarySection
                title={"New York Times Best Sellers"}
                sectionBooks={bestSellers}
              />
            )}
            {librarianPicks && (
              <LibrarySection title={"Crime"} sectionBooks={librarianPicks} />
            )}
            {librarianPicks && (
              <LibrarySection title={"Fantasy"} sectionBooks={topAuthor} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Library;
