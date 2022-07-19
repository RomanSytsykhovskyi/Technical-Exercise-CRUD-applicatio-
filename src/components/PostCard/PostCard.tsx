import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FC } from "react";
import { PostCardProps } from "../../interfaces";
import { useStyles } from "./styles";

const PostCard: FC<PostCardProps> = ({ post }) => {
  const theme = useStyles();

  const capitalize = (sentences: string): string =>
    sentences.charAt(0).toUpperCase() + sentences.slice(1);

  return (
    <Card sx={{ maxWidth: 375 }}>
      <CardHeader
        sx={{ pb: "0px" }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent sx={{ pb: "0px" }}>
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
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Typography sx={{ mr: "5px" }} variant="body2" color="text.secondary">
            {1}
          </Typography>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <Typography sx={{ mr: "5px" }} variant="body2" color="text.secondary">
            {8}
          </Typography>
          <CommentIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostCard;
