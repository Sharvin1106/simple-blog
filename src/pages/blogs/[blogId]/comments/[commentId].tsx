import { useRouter } from "next/router";
import React from "react";

const Comment = () => {
  const router = useRouter();
  const { blogId, commentId } = router.query;

  return (
    <div>
      My blog {blogId}, my comment {commentId}
    </div>
  );
};

export default Comment;
