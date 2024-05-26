export interface User{
  name: String
}

export interface PostProp{

  _id: string,
  title: string,
  description:string,
    visibility: "public" | "private",
    author: string,
  className: string,
  headerImageUrl: string
}