import "@logseq/libs"
import React, { useEffect, useState } from "react"
import BookView from "./components/BookView"
import Layout from "./components/Layout"
import { useAppVisible } from "./utils"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas)

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
          <Layout
            content={{
              dashboard: {
                icon: "home",
                name: "Dashboard",
                content: <BookView books={books} />,
              },
            }}
          />
        </div>
      </>
    )
  }
  return null
}

export default App
