import debounce from "lodash/debounce"
import React, { ChangeEvent, useState } from "react"
import { GoogleBook } from "../interface/book"
import Modal from "./Modal"

interface AddBookModalProps {
  isOpen: boolean
  onClose: () => void
  onAddBook: (book: GoogleBook) => void
}

const AddBookModal: React.FC<AddBookModalProps> = ({
  isOpen,
  onClose,
  onAddBook,
}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<GoogleBook[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = debounce(async () => {
    setIsLoading(true)
    setSearchResults([]) // Clear previous search results

    // Implement the API call to Google Books and update searchResults
    // (You need to implement the actual API call here)

    // Example API call:
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
      )
      const data = await response.json()
      setSearchResults(data.items || [])
    } catch (error) {
      console.error("Error fetching data:", error)
    }

    setIsLoading(false)
  }, 500)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    handleSearch()
  }

  const handleAddBook = (book: GoogleBook) => {
    onAddBook(book)
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      title="Add Book"
      showFooter={false}
      content={
        <div className="w-full max-w-xl mx-auto p-4">
          <div className="flex items-center mb-4 w-full">
            <input
              type="text"
              placeholder="Enter book name"
              value={searchTerm}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-l"
            />
            {isLoading && (
              <div className="flex justify-center">
                <div className="animate-spin w-6 h-6 border-t-2 border-blue-500 border-r-2 rounded-full"></div>
              </div>
            )}
          </div>
          <div
            className="search-results w-full max-w-xl mx-aut"
            style={{
              height: "300px",
              overflowY: "auto",
              border: "1px solid #E5E7EB",
              padding: "8px",
            }}
          >
            <ul>
              {searchResults.map((book) => (
                <li
                  key={book.id}
                  className="cursor-pointer hover:bg-gray-100 transition-colors p-2 rounded-lg"
                  onClick={() => handleAddBook(book)}
                >
                  <span className="font-semibold">
                    {book.volumeInfo.title}, {book.volumeInfo.publisher}
                  </span>
                  {book.volumeInfo.authors && (
                    <div className="text-gray-500">
                      <span>{book.volumeInfo.authors.join(", ")}</span>
                    </div>
                  )}
                  {book.volumeInfo.publisher && (
                    <div className="text-gray-500">
                      <span>{book.volumeInfo.publisher}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      }
      confirmText="Close"
      cancelText="Cancel"
      onConfirm={onClose}
      onCancel={onClose}
    />
  )
}

export default AddBookModal
