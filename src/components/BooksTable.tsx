import React from "react"
import { Book } from "../interface/book"

interface BookTableProps {
  books: Book[]
}

const BookTable: React.FC<BookTableProps> = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Author</th>
            <th className="px-4 py-2">Pages</th>
            <th className="px-4 py-2">Year Bought</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Genre</th>
            <th className="px-4 py-2">Publisher</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Format</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{book.properties.title}</td>
              <td className="border px-4 py-2">{book.properties.author[0]}</td>
              <td className="border px-4 py-2">{book.properties.pages}</td>
              <td className="border px-4 py-2">
                {book.properties.yearBought[0]}
              </td>
              <td className="border px-4 py-2">{book.properties.status}</td>
              <td className="border px-4 py-2">
                {book.properties.genre.join(", ")}
              </td>
              <td className="border px-4 py-2">
                {book.properties.publisher[0]}
              </td>
              <td className="border px-4 py-2">{book.properties.price}</td>
              <td className="border px-4 py-2">{book.properties.format[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookTable
