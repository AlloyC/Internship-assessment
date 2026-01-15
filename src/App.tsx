import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Post from "./pages/Post";
import UsersContext from "./providers/UsersContext";
import UserPosts from "./providers/UserPostsContext";

function App() {
  return (
    <UsersContext>
      <UserPosts>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="post/:id" element={<Post />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Route>
        </Routes>
      </UserPosts>
    </UsersContext>
  );
}

export default App;
