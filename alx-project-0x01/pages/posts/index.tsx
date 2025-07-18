import React from "react";
import PostCard from "../../components/common/PostCard"; // <- Adjust if you're using @/ aliasing
import Header from "../../components/layout/Header";
import { PostProps } from "../../interfaces"; // <- Adjust if needed

interface PageProps {
  posts: PostProps[];
}

const Posts: React.FC<PageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              body={post.body}
              userId={post.userId}
              id={post.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
