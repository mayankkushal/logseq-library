import { LSPluginUserEvents } from "@logseq/libs/dist/LSPlugin.user"
import React from "react"

let _visible = logseq.isMainUIVisible

function subscribeLogseqEvent<T extends LSPluginUserEvents>(
  eventName: T,
  handler: (...args: any) => void
) {
  logseq.on(eventName, handler)
  return () => {
    logseq.off(eventName, handler)
  }
}

const subscribeToUIVisible = (onChange: () => void) =>
  subscribeLogseqEvent("ui:visible:changed", ({ visible }) => {
    _visible = visible
    onChange()
  })

export const useAppVisible = () => {
  return React.useSyncExternalStore(subscribeToUIVisible, () => _visible)
}

export const formatWithDoubleBrackets = (data: string | string[]): string => {
  if (Array.isArray(data)) {
    // If it's an array, format each item and join with a comma
    return data.map((item) => `[[${item}]]`).join(", ")
  } else if (typeof data === "string") {
    // If it's a string, format it with double brackets
    return `[[${data}]]`
  } else {
    // Handle other data types (optional)
    return ""
  }
}
