import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

type Props = {
  blogId: string;
  title: string;
};

const BlogCard: React.FC<Props> = ({ blogId, title }) => {
  const router = useRouter();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => router.push(`/blogs/${blogId}`)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
