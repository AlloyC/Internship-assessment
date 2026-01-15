import { Link, useSearchParams } from "react-router-dom";
import { useGetPosts, usePosts } from "../providers/UserPostsContext";
import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";

const Post = () => {
  const [searchParams] = useSearchParams();

  const userId = searchParams.get("userId");
  const userName = searchParams.get("userName");

  const { posts } = usePosts();
  const { fetchPosts } = useGetPosts();

  useEffect(() => {
    fetchPosts({ id: Number(userId) });
  }, [searchParams]);
  return (
    <>
      <div className="py-5 rounded shadow flex items-center justify-between bg-white px-5 mb-5 mt-5 pl-16">
        <h3 className="font-medium text-xl">Posts by User ({userName})</h3>
        <Link
          to={`/`}
          className="hidden md:flex items-center hover:font-medium"
        >
          <ChevronLeft />
          Back to Dashboard
        </Link>
      </div>
      <div className="flex flex-wrap gap-4">
        {posts.length >= 1 &&
          posts.map((post) => (
            <div key={post.id} className="flex-1 p-5 rounded shadow bg-white">
              <h2 className="font-medium text-lg mb-2 capitalize">
                {post.title}
              </h2>
              <p className="w-[40ch]">{post.body}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Post;
