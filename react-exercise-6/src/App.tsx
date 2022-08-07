import { useEffect, useState } from "react";
import "./App.css";
import { fetchAllPosts } from "./services/post.service";
import { Forecast, Quote } from "./types";

function App() {
  const [posts, setPosts] = useState<Quote[]>([]);
  const [forecast, setForecast] = useState<Forecast[]>([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  function getAllPosts() {
    fetchAllPosts().then((response) => setPosts(response.data));
  }

  useEffect(() => {
    getAllForecasts();
  }, []);

  function getAllForecasts() {
    fetchAllPosts().then((response) => setPosts(response.data));
  }

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <ul>
        {forecast.map((forecast) => (
          <li key={forecast.name}>{forecast.name}</li>
        ))}
      </ul>
      <h1>Quotable Quotes</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.author}>
            {post.text} ({post.author})
          </li>
        ))}
        {/* {posts.map((post) => (
          <li key={post.text}>{post.author}</li>
        ))} */}
      </ul>
    </div>
  );
}

export default App;
