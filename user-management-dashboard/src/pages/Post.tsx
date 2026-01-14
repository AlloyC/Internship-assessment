import { useParams } from "react-router-dom";
import { useGetPosts, usePosts } from "../providers/UserPostsContext";
import { useEffect } from "react";

const Post = () => {
  const { id } = useParams();
  const { posts } = usePosts();
  const { fetchPosts } = useGetPosts();

  useEffect(() => {
    fetchPosts({ id: Number(id) });
  }, [id]);
  return (
    <div>
      {posts.length >= 1 &&
        posts.map((post) => <div key={post.id}>{post.title}</div>)}
    </div>
  );
};

export default Post;
