import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FC } from "react";
import { PostCardProps } from "../../interfaces";
import { useStyles } from "./styles";

const PostCard: FC<PostCardProps> = ({ post }) => {
  const theme = useStyles();

  const capitalize = (sentences: string): string =>
    sentences.charAt(0).toUpperCase() + sentences.slice(1);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography className={theme.title} variant="h5" component="div">
          {post.title}
        </Typography>
        <Divider />
        <Typography sx={{ mt: "10px", mb: "10px" }} color="text.secondary">
          Description:
        </Typography>
        <Typography className={theme.description} variant="body2">
          {capitalize(post.body)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/details/${post.id}`}
          size="small"
          variant="outlined"
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
