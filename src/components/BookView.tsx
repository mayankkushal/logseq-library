import React, { useState } from "react"
import { Book, GoogleBook } from "../interface/book"
import { formatWithDoubleBrackets } from "../utils"
import AddBookModal from "./AddBookModal"
import BooksGrid from "./BooksGrid"
import BookTable from "./BooksTable"

const BookView = ({ books }: { books: Book[] }) => {
  const [view, setView] = useState("grid") // Initial view state is 'grid'
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const addBook = (book: GoogleBook) => {
    logseq.Editor.createPage(book.volumeInfo.title, {
      type: "[[Books]]",
      title: book.volumeInfo.title,
      author: formatWithDoubleBrackets(book.volumeInfo.authors),
      publisher: formatWithDoubleBrackets(book.volumeInfo.publisher),
      cover: book.volumeInfo.imageLinks.thumbnail,
      publishedDate: book.volumeInfo.publishedDate,
      pages: book.volumeInfo.pageCount.toString(),
      status: "unread",
      "year-bought": null,
      genre: null,
      format: null,
      series: null,
    })

    closeModal()
  }

  return (
    <div>
      <div className="text-center my-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
          onClick={() => setView(view === "table" ? "grid" : "table")}
        >
          Switch View
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-full ml-4"
          onClick={openModal}
        >
          Add New Book
        </button>
      </div>

      {view === "table" ? (
        <BookTable books={books} />
      ) : (
        <BooksGrid books={books} />
      )}
      <AddBookModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddBook={addBook}
      />
    </div>
  )
}

export default BookView
