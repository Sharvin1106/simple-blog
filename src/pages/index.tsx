import { useState, useEffect } from "react";
import Head from "next/head";
import AppBar from "@/components/AppBar";
import axios from "axios";
import BlogCard from "@/components/BlogCard";

type Blog = {
  id: string;
  title: string;
};

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[] | null>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }, []);
  console.log(blogs);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar websiteName={"Amira's Blog"} />
      {blogs?.map((blog) => {
        return <BlogCard key={blog.id} blogId={blog.id} title={blog.title} />;
      })}
    </>
  );
}
