import React from "react";
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { formatCurrency } from "utils/currency";

import { Doughnut } from "react-chartjs-2";

const useStyles = makeStyles((theme) => ({
  contentTitle: {
    fontSize: 18,
    fontWeight: 700,
  },
  legendDescription: {
    fontSize: 16,
    fontWeight: 600,
  },
}));

const CategoriesContent = () => {
  const classes = useStyles();

  const data = {
    labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Other"],
    datasets: [
      {
        label: "# of Tomatoes",
        data: [50000000, 20000000, 10000000, 30000000, 80000000],
        backgroundColor: [
          "#F9DD4F",
          "#2F8DEE",
          "#43CC32",
          "#F15352",
          "#CCCCCC",
        ],
        borderColor: ["#F9DD4F", "#2F8DEE", "#43CC32", "#F15352", "#CCCCCC"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <React.Fragment>
      <Typography className={classes.contentTitle}>Categories</Typography>
      <div style={{ marginTop: 40 }}>
        <Grid container>
          <Grid item>
            <Doughnut
              data={data}
              width={400}
              options={{
                maintainAspectRatio: true,
                cutoutPercentage: 75,
                responsive: true,
                legend: {
                  display: true,
                  position: "right",
                  labels: {
                    usePointStyle: true,
                    fontSize: 16,
                    padding: 10,
                    fontFamily: "'Inter', sans-serif",
                    fontColor: "#000000",
                    generateLabels: (chart) => {
                      const data = chart.data;
                      const totalAmount = data.datasets[0].data.reduce(
                        (a, b) => a + b
                      );

                      let transformedData = [];

                      data.labels.forEach((item, index) => {
                        transformedData.push({
                          text: `${item} (${(
                            (data.datasets[0].data[index] / totalAmount) *
                            100
                          ).toFixed(1)}%) `,
                          fillStyle: `${data.datasets[0].backgroundColor[index]}`,
                          lindeDash: 0,
                        });
                      });

                      return transformedData;
                    },
                  },
                },
                tooltips: {
                  enabled: true,
                  callbacks: {
                    label: (tooltipItem, data) => {
                      return `${
                        data.labels[tooltipItem.index]
                      }: ${formatCurrency(
                        data.datasets[0].data[tooltipItem.index]
                      )}`;
                    },
                  },
                },
              }}
            />
          </Grid>
          <Grid item>
            <List dense={true}>
              {data.datasets[0].data.map((item, index) => {
                return (
                  <ListItem style={{ padding: 0, margin: 0 }}>
                    <ListItemText
                      style={{ margin: 2 }}
                      classes={{ primary: classes.legendDescription }}
                      primary={`- ${formatCurrency(
                        data.datasets[0].data[index]
                      )}`}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default CategoriesContent;
