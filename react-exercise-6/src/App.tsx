import { useEffect, useState } from "react";
import "./App.css";
import { fetchAllPosts } from "./services/post.service";
import { Quote } from "./types";

function App() {
  const [posts, setPosts] = useState<Quote[]>([]);
  const [post, setPost] = useState<Quote>();

  useEffect(() => {
    getAllPosts();
  }, []);

  function getAllPosts() {
    fetchAllPosts().then((response) => setPosts(response.data));
  }

  return <div className="App"></div>;
}

export default App;
