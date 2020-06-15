import React, { useState } from "react";
import { Typography, Grid, ButtonGroup, Button } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { CalendarToday, FiberManualRecord } from "@material-ui/icons";

import { Line } from "react-chartjs-2";

const useStyles = makeStyles((theme) => ({
  contentTitle: {
    fontSize: 18,
    fontWeight: 700,
  },
  currentMonth: {
    color: theme.palette.color.grey,
    fontSize: 18,
    fontWeight: 700,
  },
  transactionTypeButtonGroup: {
    color: theme.palette.color.darkGrey,
    border: `1px solid ${theme.palette.color.borderColor}`,
    fontWeight: 500,
    textTransform: "none",
  },
  transactionTypeButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&:focus": {
      color: theme.palette.color.blue,
    },
  },
  incomingIcon: {
    color: theme.palette.color.green,
  },
  outgoingIcon: {
    color: theme.palette.color.blue,
  },
  calendarIcon: {
    color: theme.palette.color.grey,
    marginTop: -2,
    paddingLeft: 5,
    paddingRight: 5,
    width: 18,
  },
  monthInput: {
    width: 200,
    paddingTop: 1,
    border: `1px solid ${theme.palette.color.borderColor}`,
    borderRadius: 5,
    cursor: "pointer",
    "&&&:before": {
      border: 0,
    },
    "&&:after": {
      border: 0,
    },
  },
}));

const MonthlyReportContent = () => {
  const classes = useStyles();

  const [selectedDate, handleDateChange] = useState(new Date());

  //eslint-disable-next-line
  const [incomingTransactions, setIncomingTransactions] = useState({
    label: "Incoming",
    data: [1500, 2000, 1300, 1800, 2500],
    borderWidth: 5,
    lineTension: 0.2,
    borderColor: "#43CC32",
    fill: false,
  });

  //eslint-disable-next-line
  const [outgoingTransactions, setOutgoingTransactions] = useState({
    label: "Outgoing",
    data: [1200, 1500, 1100, 1700, 2000],
    borderWidth: 5,
    lineTension: 0.2,
    borderColor: "#2F8DEE",
    fill: false,
  });

  const [data, setData] = useState({
    labels: ["1", "7", "14", "21", "28"],
    datasets: [incomingTransactions, outgoingTransactions],
  });

  const showAllTransactions = () => {
    setData((prevState) => {
      return {
        labels: prevState.labels,
        datasets: [incomingTransactions, outgoingTransactions],
      };
    });
  };

  const showIncomingTransactions = () => {
    setData((prevState) => {
      return {
        labels: prevState.labels,
        datasets: [incomingTransactions],
      };
    });
  };

  const showOutgoingTransactions = () => {
    setData((prevState) => {
      return {
        labels: prevState.labels,
        datasets: [outgoingTransactions],
      };
    });
  };

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ minHeight: 55 }}
      >
        <Grid item>
          <Grid container spacing={1}>
            <Grid item>
              <Typography className={classes.contentTitle}>
                Monthly Report
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.currentMonth}>March</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item>
              <div className={classes.test}>
                <DatePicker
                  autoOk
                  animateYearScrolling={true}
                  variant="inline"
                  openTo="year"
                  views={["year", "month"]}
                  value={selectedDate}
                  onChange={handleDateChange}
                  minDate={moment("2019-01")}
                  maxDate={moment()}
                  labelFunc={(date) => {
                    return moment(date).format("MMMM YYYY");
                  }}
                  InputProps={{
                    className: classes.monthInput,
                    startAdornment: (
                      <CalendarToday className={classes.calendarIcon} />
                    ),
                  }}
                />
              </div>
            </Grid>
            <Grid item>
              <ButtonGroup
                classes={{
                  groupedOutlined: classes.transactionTypeButtonGroup,
                }}
                variant="outlined"
                aria-label="outlined primary button group"
              >
                <Button
                  className={classes.transactionTypeButton}
                  onClick={showAllTransactions}
                >
                  All
                </Button>
                <Button
                  className={classes.transactionTypeButton}
                  onClick={showIncomingTransactions}
                >
                  <FiberManualRecord className={classes.incomingIcon} />
                  Incoming
                </Button>
                <Button
                  className={classes.transactionTypeButton}
                  onClick={showOutgoingTransactions}
                >
                  <FiberManualRecord className={classes.outgoingIcon} />
                  Outgoing
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div style={{ marginTop: 20 }}>
        <Line
          data={data}
          options={{
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
            legend: {
              display: false,
            },
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default MonthlyReportContent;
