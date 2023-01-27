import Loading from "../Spinner/Loading";
function SearchResults({ results }) {
  return (
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
                  <h1 className="font-poppins-bold text-lg">{result.title}</h1>
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
  );
}
export default SearchResults;
