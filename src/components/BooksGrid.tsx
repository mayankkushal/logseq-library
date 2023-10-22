import React from "react"
import { Book } from "../interface/book"

interface CardGridProps {
  books: Book[]
}

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-100 h-161 mb-4 overflow-hidden relative">
      <div className="w-100 h-96 object-cover transition-transform transform hover:scale-110">
        <img
          src={book.properties.cover}
          alt={book.properties.title}
          className="w-full h-full"
        />
      </div>
      <div className="px-4 py-2 absolute bottom-0 w-full">
        <div className="bg-black bg-opacity-60 p-2">
          <h2 className="text-white font-semibold text-base sm:text-lg">
            {book.properties.title}
          </h2>
          <p className="text-white text-xs sm:text-sm">
            Author(s): {book.properties.author.join(", ")}
          </p>
          <p className="text-white text-xs sm:text-sm">
            Publisher: {book.properties.publisher.join(", ")}
          </p>
          <p className="text-white text-xs sm:text-sm">
            Pages: {book.properties.pages}
          </p>
          <p className="text-white text-xs sm:text-sm">
            Genre: {book.properties.genre.join(", ")}
          </p>
        </div>
      </div>
    </div>
  )
}

const BooksGrid: React.FC<CardGridProps> = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-4">
      {books.map((book) => (
        <BookCard key={book.properties.title} book={book} />
      ))}
    </div>
  )
}

export default BooksGrid
