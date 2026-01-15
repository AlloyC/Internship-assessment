export const API = {
  GET_USERS: "https://jsonplaceholder.typicode.com/users",
  GET_USER_POSTS: "https://jsonplaceholder.typicode.com/posts?userId=",
} as const;

export interface UserPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: Company;
  address: Address;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}
