import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

type BlogDetails = {
  id: string;
  title: string;
  body: string;
};

const SingleBlog = () => {
  const [blogDetails, setBlogDetails] = useState<BlogDetails | null>(null);
  const router = useRouter();
  const blogId = router.query.blogId as string;

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
      .then((response) => {
        setBlogDetails(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }, []);

  return <div>{blogDetails?.body}</div>;
};

export default SingleBlog;
