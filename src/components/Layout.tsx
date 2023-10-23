import { library } from "@fortawesome/fontawesome-svg-core"
import { faBook, faCog, faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"

// Import the Font Awesome icons

library.add(faHome, faBook, faCog)

type Content = {
  [key: string]: {
    icon: any // FontAwesomeIconProp
    name: string
    content: JSX.Element
  }
}

type Route = keyof Content

interface LayoutProps {
  content: Content
}

const Layout: React.FC<LayoutProps> = ({ content }) => {
  const [selectedRoute, setSelectedRoute] = useState<Route>("dashboard")

  const switchRoute = (route: Route) => {
    setSelectedRoute(route)
  }

  return (
    <div className="flex">
      <aside className="bg-gray-800 text-white w-12 min-h-screen p-4 flex flex-col items-center justify-between">
        <nav>
          <ul className="space-y-4">
            {Object.keys(content).map((route) => (
              <li key={route}>
                <button
                  onClick={() => switchRoute(route as Route)}
                  className={`${
                    selectedRoute === route
                      ? "bg-blue-600"
                      : "hover:bg-gray-600 hover:text-blue-400"
                  } w-full p-2 text-center rounded ${
                    selectedRoute === route ? "text-white" : "text-gray-200"
                  }`}
                >
                  <FontAwesomeIcon icon={content[route].icon} size="2x" />
                  <span className="hidden group-hover:block text-xs mt-2">
                    {content[route].name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded mt-4"
          onClick={() => {
            window.logseq.hideMainUI()
          }}
        >
          <FontAwesomeIcon icon={"power-off"} size="2x" />
        </button>
      </aside>

      <main className="w-3/4 p-4">{content[selectedRoute].content}</main>
    </div>
  )
}

export default Layout
