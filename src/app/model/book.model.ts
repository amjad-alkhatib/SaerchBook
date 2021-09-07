export interface BookModel {
  kind: string,
  id: string,
  volumeInfo: {
    title: string,
    authors: [
      name: string
    ],
    description : string,
    publisher:string,
    industryIdentifiers: [
      {
        type?: string,
        identifier?: string
      }
    ],
    imageLinks: {
      smallThumbnail: string,
      thumbnail: string
    },
    language: string,
  },
  saleInfo: {
    country: string,
  },
  accessInfo: {
    country: string,
  }

}
