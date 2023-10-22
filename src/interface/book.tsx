export interface Book {
  properties: {
    pages: number
    author: string[]
    yearBought: string[]
    status: string
    genre: string[]
    title: string
    type: string[]
    publisher: string[]
    price: number
    format: string[]
    cover: string
  }
}

export interface GoogleBook {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: {
    title: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    industryIdentifiers: {
      type: string
      identifier: string
    }[]
    readingModes: {
      text: boolean
      image: boolean
    }
    pageCount: number
    printType: string
    categories: string[]
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    imageLinks: {
      smallThumbnail: string
      thumbnail: string
    }
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
  }
  saleInfo: {
    country: string
    saleability: string
    isEbook: boolean
  }
  accessInfo: {
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: {
      isAvailable: boolean
    }
    pdf: {
      isAvailable: boolean
    }
    webReaderLink: string
    accessViewStatus: string
    quoteSharingAllowed: boolean
  }
  searchInfo: {
    textSnippet: string
  }
}
