import React from "react";
import Header from "./Header";
import About from "./Aboutt";
import ArticleList from "./ArticleList";

const posts = [
  { id: 1, title: "Post 1", date: "2023-11-01", preview: "Content of Post 1" },
  { id: 2, title: "Post 2", date: "2023-11-02", preview: "Content of Post 2" },
  { id: 3, title: "Post 3", date: "2023-11-03", preview: "Content of Post 3" },
];

function App() {
  const blogName = "Your Blog Name";

  return (
    <div>
      <Header blogName={blogName} />
      <About imageUrl="" aboutText="Your blog description here." />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
