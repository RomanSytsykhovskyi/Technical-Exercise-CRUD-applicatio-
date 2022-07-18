import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchGetPosts } from "../../api";
import { Post } from "../../types";
import PostCard from "../../components/PostCard/PostCard";

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchGetPosts()
      .then((posts) => setPosts(posts))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px 0px",
      }}
    >
      <Grid container spacing={2}>
        {posts.length > 0 &&
          posts.map((post) => (
            <Grid item md={4} key={post.id}>
              <PostCard post={post} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
