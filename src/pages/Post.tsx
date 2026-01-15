import { Link, useSearchParams } from "react-router-dom";
import { useGetPosts, usePosts } from "../providers/UserPostsContext";
import { useEffect } from "react";
import { ArrowLeft, FileText, UserCircle, Inbox } from "lucide-react";

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
    <div className="py-6 px-4">
      {/* Header */}
      <div
        className="py-5 px-6 rounded-xl shadow-lg flex items-center justify-between 
        bg-linear-to-r from-indigo-600 to-purple-600 mb-6"
      >
        <div className="flex items-center gap-3">
          <UserCircle className="w-10 h-10 text-indigo-200" />
          <div>
            <h3 className="font-bold text-xl text-white">{userName}'s Posts</h3>
            <p className="text-indigo-200 text-sm">{posts.length} posts</p>
          </div>
        </div>
        <Link
          to="/"
          className=" items-center gap-2 text-indigo-100 hover:text-white 
            bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all hidden md:inline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="">Dashboard</span>
        </Link>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-5 rounded-xl shadow-md bg-white border-l-4 border-indigo-500 
              hover:shadow-xl hover:border-purple-500 hover:-translate-y-1 
              transition-all duration-200"
          >
            <div className="flex gap-3">
              <FileText className="w-5 h-5 text-indigo-400 mt-1 shrink-0" />
              <div>
                <h2 className="font-semibold text-lg mb-2 capitalize text-slate-800 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed line-clamp-4">
                  {post.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {posts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <Inbox className="w-16 h-16 mb-4 text-gray-300" />
          <p className="text-lg font-medium text-gray-500">No posts found</p>
          <p className="text-sm">This user hasn't created any posts yet.</p>
        </div>
      )}
    </div>
  );
};

export default Post;
