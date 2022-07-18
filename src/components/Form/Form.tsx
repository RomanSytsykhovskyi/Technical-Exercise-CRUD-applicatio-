import { Box, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { FormProps } from "../../interfaces";

const Form: FC<FormProps> = ({
  children,
  register,
  handleSubmit,
  handleFormSubmit,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          position: "relative",
        }}
      >
        <Typography
          variant="h3"
          component="div"
          gutterBottom
          sx={{ marginBottom: "20px" }}
        >
          Create your post
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(handleFormSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "600px",
            width: "100%",
            padding: "15px",
          }}
        >
          <TextField
            {...register("title")}
            label="Title"
            required
            sx={{ marginBottom: "15px" }}
            fullWidth
          />
          <TextField
            {...register("body")}
            label="Description"
            multiline
            rows={4}
            required
            sx={{ marginBottom: "30px" }}
            fullWidth
          />
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
