import { useRef } from "react";
function LibrarySection({ title, sectionBooks }) {
  const slideLeft = useRef(null);
  const slideRight = useRef(null);
  const scrollSection = useRef(null);

  function sideScroll(element, direction) {
    let scrollValue = scrollSection.current.clientWidth;

    if (direction == "left") {
      element.scrollLeft -= scrollValue;
    } else {
      element.scrollLeft += scrollValue;
    }
  }
  return (
    <div className="flex justify-center bg-white font-poppins-regular">
      <div className="w-full max-w-6xl">
        <h1 className="font-poppins-bold text-3xl my-14">{title}</h1>
        <div className="w-full flex justify-between space-x-2">
          <button ref={slideLeft} className=" p-2 text-black"  onClick={() => sideScroll(scrollSection.current, "left")}>
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div className="grid grid-flow-col flex-grow gap-8 overflow-x-scroll scrollbar-hide" ref={scrollSection}>
            {sectionBooks &&
              sectionBooks.map((book) => (
                <div
                  key={book.key}
                  className="w-[500px] rounded-[10px] bg-gradient bg-gradient-to-b from-blizzard to-white p-10 relative my-14 group"
                >
                  <div className="absolute -top-10 group-hover:scale-105 shadow-xl rounded-sm">
                    <img
                      className="w-[125px] rounded-sm"
                      src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                      alt={`Showing cover for ${book.title}`}
                    />
                  </div>
                  <div className=" flex justify-end">
                    <div className="space-y-4 w-1/2">
                      <h3 className="font-poppins-bold text-lg truncate">
                        {book.title}
                      </h3>
                      <h5 className="text-base">{book.authors[0].name}</h5>
                      <div>
                        <p className="p-2 text-center bg-purple-300 text-xs rounded-full">
                          {book.subject[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button ref={slideLeft} className="p-2 text-black"  onClick={() => sideScroll(scrollSection.current, "right")}>
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
export default LibrarySection;
