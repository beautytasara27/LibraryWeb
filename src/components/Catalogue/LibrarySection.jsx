function LibrarySection({title, sectionBooks}){
    return(
        <div className="flex justify-center bg-white font-poppins-regular">
        <div className="w-full max-w-6xl">
          <h1 className="font-poppins-bold text-3xl my-14">{title}</h1>
          <div className="grid grid-cols-3 gap-8">
            {sectionBooks &&
                sectionBooks.map((book) => (
                <div key={book.key} className=" rounded-[10px] bg-gradient bg-gradient-to-b from-blizzard to-white p-10 relative my-14 group">
                  <div className="absolute -top-10 group-hover:scale-105 shadow-xl rounded-sm">
                    <img
                      className="w-[125px] rounded-sm"
                      src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                      alt={`Showing cover for ${book.title}`}
                    ></img>
                  </div>
                  <div className=" flex justify-end">
                    <div className="space-y-4 w-1/2">
                      <h3 className="font-poppins-bold text-xl truncate">
                      {book.title}
                    </h3>
                      <h5 className="text-xl">{book.authors[0].name}</h5>
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
        </div>
      </div>
    )
}
export default LibrarySection;