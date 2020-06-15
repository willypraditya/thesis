import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  paginationComponent: {
    overflow: "auto",
  },
  paginationRoot: {
    float: "right",
    "& .Mui-selected": {
      borderColor: theme.palette.color.blue,
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
    },
  },
}));

const PaginationComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.paginationComponent}>
      <Pagination
        classes={{ ul: classes.paginationRoot }}
        count={10}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default PaginationComponent;
