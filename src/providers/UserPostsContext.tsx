import { createContext, useContext, useState } from "react";
import { API, type UserPost } from "../types";

const Posts = createContext<{ posts: UserPost[] } | null>(null);
export const usePosts = () => {
  const context = useContext(Posts);
  if (!context) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};

const GetPosts = createContext<{
  fetchPosts: ({ id }: { id: number }) => Promise<void>;
} | null>(null);

export const useGetPosts = () => {
  const context = useContext(GetPosts);
  if (!context) {
    throw new Error("useGetPosts must be used within a GetPostsProvider");
  }
  return context;
};

const UserPosts = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<UserPost[]>([]);

  // Fetching Posts
  const fetchPosts = async ({ id }: { id: number }) => {
    try {
      const response = await fetch(`${API.GET_USER_POSTS}${id}`);
      const data = (await response.json()) as UserPost[];
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <Posts.Provider value={{ posts }}>
      <GetPosts.Provider value={{ fetchPosts }}>{children}</GetPosts.Provider>
    </Posts.Provider>
  );
};

export default UserPosts;
