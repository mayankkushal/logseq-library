import "@logseq/libs"
import React, { useEffect, useState } from "react"
import BookView from "./components/BookView"
import Header from "./components/Header"
import { useAppVisible } from "./utils"

function App() {
  const visible = useAppVisible()
  const [books, setBooks] = useState<any>([])

  useEffect(() => {
    getPage()
  }, [visible])

  const getPage = async () => {
    const booksResponse = await logseq.DB.q("(page-property :type [[Books]])")
    console.log("this is page, ", books)
    setBooks(booksResponse)
  }

  if (visible) {
    return (
      <>
        <div className="backdrop-filter backdrop-blur-md fixed inset-0 p-4">
          <Header />
          <BookView books={books} />
        </div>
      </>
    )
  }
  return null
}

export default App
