import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2F8DEE",
    },
    color: {
      blue: "#2F8DEE",
      darkBlue: "#1863B0",
      lightBlue: "#D3E9FF",
      transparentBlue: "#EBF5FF",
      white: "#FFFFFF",
      grey: "#959595",
      darkGrey: "#777777",
      black: "#121212",
      green: "#43CC32",
      lightGreen: "#D9FFD4",
      darkGreen: "#189C08",
      transparentGreen: "#F0FFF3",
      yellow: "#8D7700",
      lightYellow: "#E5C412",
      transparentYellow: "#FFFBE9",
      red: "#B71515",
      transparentRed: "#FFF0F0",
      borderColor: "#E8E8E8",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: "none",
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#2F8DEE",
      },
    },
    MuiPickersYear: {
      yearSelected: {
        color: "#2F8DEE",
      },
    },
    MuiPickersMonth: {
      monthSelected: {
        color: "#2F8DEE",
      },
    },
    MuiOutlinedInput: {
      // notchedOutline: {
      //     border: 'none'
      // }
    },
    MuiStepIcon: {
      root: {
        "&$completed": {
          color: "#43CC32",
        },
        "&$active": {
          color: "#2F8DEE",
        },
      },
      active: {},
      completed: {},
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <App />
    </MuiPickersUtilsProvider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
