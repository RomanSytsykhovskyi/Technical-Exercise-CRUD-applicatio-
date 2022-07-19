import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { fetchGetPosts } from "../../api";
import { Post } from "../../types";
import PostCard from "../../components/PostCard/PostCard";
import AppPagination from "../../components/AppPagination/AppPagination";

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const POST_QUANTITY: number = 6;

  useEffect(() => {
    fetchGetPosts()
      .then((posts) => setPosts(posts))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box
      sx={{
        padding: "10px 0px",
      }}
    >
      <Container maxWidth="xl">
        {posts.length > 0 && (
          <>
            <Grid container spacing={2}>
              {posts.reduce(
                (previousValue: JSX.Element[], post: Post, idx: number) => {
                  if (
                    idx >= (page - 1) * POST_QUANTITY &&
                    idx < page * POST_QUANTITY
                  ) {
                    previousValue.push(
                      <Grid item md={4} key={post.id}>
                        <PostCard post={post} />
                      </Grid>
                    );
                  }
                  return previousValue;
                },
                []
              )}
            </Grid>
            <AppPagination
              setPage={setPage}
              postLength={posts.length}
              postQuantity={POST_QUANTITY}
            />
          </>
        )}
      </Container>
    </Box>
  );
};

export default HomePage;
