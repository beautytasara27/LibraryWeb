import Loading from "../Spinner/Loading";
import { Transition } from "@headlessui/react";
function SearchResults({ results }) {
  return (
    <Transition>
      <Transition.Child
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
      >
        <div className="flex justify-center backdrop-blur-sm font-poppins-regular mb-10">
          <div className=" w-2/3 bg-white rounded-[20px]">
            <div className="p-5 flex justify-center">
              <h1 className="font-poppins-bold text-3xl">Results ...</h1>
            </div>
            {results ? (
              <div className="grid grid-cols-2 gap-8">
                {results.map((result) => (
                  <div className="flex space-x-4 p-5 w-full">
                    <img
                      className="w-[50px]"
                      src={`https://covers.openlibrary.org/b/id/${result.cover_id}-M.jpg`}
                      alt={`Showing cover for ${result.title}`}
                    />
                    <div className="">
                      <h1 className="font-poppins-bold text-lg">
                        {result.title}
                      </h1>
                      <p className="text-base">{result.authors[0].name}</p>
                      <p className="text-xs italic text-havelock">
                        {result.subject[0]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </Transition.Child>
    </Transition>
  );
}
export default SearchResults;
