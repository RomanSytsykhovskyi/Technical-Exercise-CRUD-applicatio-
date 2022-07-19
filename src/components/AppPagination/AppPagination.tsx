import { FC } from "react";
import { PaginationProps } from "../../interfaces";
import { Pagination } from "@mui/material";

const AppPagination: FC<PaginationProps> = ({
  setPage,
  postLength,
  postQuantity,
}) => {
  const handleChange = (_event: React.ChangeEvent<unknown>, val: number) => {
    setPage(val);
  };

  return (
    <Pagination
      count={Math.ceil(postLength / postQuantity)}
      color="primary"
      onChange={handleChange}
      sx={{ mt: "10px", display: "flex", justifyContent: "center" }}
      showFirstButton
      showLastButton
    />
  );
};

export default AppPagination;
