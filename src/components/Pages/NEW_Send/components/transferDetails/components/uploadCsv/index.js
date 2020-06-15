import React, { useState } from "react";
import { Container, Button, Typography, Grid } from "@material-ui/core";
import {
  CloudUploadOutlined,
  InsertDriveFile,
  DeleteOutline,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
  container: {
    border: `1px dashed ${theme.palette.color.borderColor}`,
    paddingTop: 25,
    paddingBottom: 25,
    backgroundColor: "#F6F7F9",
    borderRadius: 5,
    textAlign: "center",
  },
  uploadCsvHeader: {
    fontWeight: 700,
  },
  uploadCsvButton: {
    marginTop: 20,
    textTransform: "none",
    backgroundColor: theme.palette.color.white,
    color: theme.palette.color.black,
    fontWeight: 600,
    border: `1px solid ${theme.palette.color.borderColor}`,
  },
  uploadCsvButtonIcon: {
    width: 20,
    marginRight: 5,
    color: theme.palette.color.blue,
  },
  fileIcon: {
    color: theme.palette.color.blue,
  },
  deleteCsvButton: {
    marginTop: 20,
    textTransform: "none",
    backgroundColor: theme.palette.color.white,
    color: theme.palette.color.black,
    border: `1px solid ${theme.palette.color.borderColor}`,
  },
  deleteCsvButtonIcon: {
    width: 20,
    marginRight: 5,
    marginTop: -2,
    color: theme.palette.color.grey,
  },
}));

const UploadCsv = () => {
  const classes = useStyles();

  const [file, setFile] = useState([]);

  const onUploadFile = (e) => {
    console.log(e.target.files);
    setFile(e.target.files);
  };

  const deleteFile = () => {
    setFile([]);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        {file.length === 0 ? (
          <div>
            <Typography className={classes.uploadCsvHeader}>
              Upload CSV
            </Typography>
            <Typography>
              If you don't have the CSV template, download it here.
            </Typography>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple={false}
              type="file"
              onChange={(e) => onUploadFile(e)}
            />
            <label htmlFor="contained-button-file">
              <Button className={classes.uploadCsvButton} component="span">
                <CloudUploadOutlined className={classes.uploadCsvButtonIcon} />
                Upload CSV
              </Button>
            </label>
          </div>
        ) : (
          <div>
            <Typography className={classes.uploadCsvHeader}>
              Uploaded file
            </Typography>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center"
            >
              <Grid item>
                <InsertDriveFile className={classes.fileIcon} />
              </Grid>
              <Grid item>{file[0].name}</Grid>
            </Grid>
            <Button className={classes.deleteCsvButton} onClick={deleteFile}>
              <DeleteOutline className={classes.deleteCsvButtonIcon} />
              Delete
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default UploadCsv;
