import BookCover from "./BookCover";

const BookList = ({ sampleBooks }: { sampleBooks: Book[] }) => {
  return (
    <main className="relative mt-7">
      <div className="flex flex-col items-baseline gap-5">
        <p className="font-ibm-plex-sans text-light-100 font-semibold text-lg max-sm:text-2xl">
          Popular Books
        </p>
        <div className="w-full flex items-center">
          <ul className="grid grid-cols-6 w-full gap-12">
            {Object.values(sampleBooks).map((book) => (
              <li key={book.id}>
                <BookCover
                  coverColor={book.color}
                  coverImage={book.cover}
                  variant="medium"
                />
                <p className="book-title">{book.title}</p>
                <p className="book-genre opacity-60">{book.genre}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default BookList;
