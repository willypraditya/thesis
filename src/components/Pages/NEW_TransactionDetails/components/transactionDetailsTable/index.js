import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import PaginationComponent from "components/Global/NEW_Pagination";
import TableContainer from "@material-ui/core/TableContainer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    fontWeight: 700,
    color: theme.palette.color.black,
  },
  tableContent: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  idText: {
    color: theme.palette.color.blue,
    cursor: "pointer",
  },
  completedLabel: {
    color: theme.palette.color.green,
    backgroundColor: theme.palette.color.transparentGreen,
    border: `1px solid ${theme.palette.color.green}`,
  },
  pendingLabel: {
    color: theme.palette.color.yellow,
    backgroundColor: theme.palette.color.transparentYellow,
    border: `1px solid ${theme.palette.color.lightYellow}`,
  },
  failedLabel: {
    color: theme.palette.color.red,
    backgroundColor: theme.palette.color.transparentRed,
    border: `1px solid ${theme.palette.color.red}`,
  },
  amountIncoming: {
    color: theme.palette.color.darkGreen,
    fontWeight: 700,
  },
  amountOutgoing: {
    color: theme.palette.color.black,
    fontWeight: 700,
  },
}));

const transactionsData = [
  {
    bankDestination: "BCA",
    accountNumber: "123123123",
    recipient: "Willy Praditya",
    amount: "Rp. 20.000.000,12",
    amountType: "incoming",
  },
];

// const label = (status, classes) => {
//   if (status === "completed") {
//     return <Chip className={classes.completedLabel} label="Completed" />;
//   } else if (status === "pending") {
//     return <Chip className={classes.pendingLabel} label="Pending" />;
//   } else {
//     return <Chip className={classes.failedLabel} label="Failed" />;
//   }
// };

const TransactionsDetailsTable = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeader} align="left">
              Bank Destination
            </TableCell>
            <TableCell className={classes.tableHeader} align="left">
              Account Number
            </TableCell>
            <TableCell className={classes.tableHeader} align="left">
              Recipient(s)
            </TableCell>
            <TableCell className={classes.tableHeader} align="left">
              Amount
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactionsData.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={classes.tableContent} align="left">
                {row.bankDestination}
              </TableCell>
              <TableCell className={classes.tableContent} align="left">
                {row.accountNumber}
              </TableCell>
              <TableCell className={classes.tableContent} align="left">
                {row.recipient}
              </TableCell>
              <TableCell className={classes.tableContent} align="left">
                {row.amountType === "incoming" ? (
                  <Typography className={classes.amountIncoming}>
                    {`+ ${row.amount}`}
                  </Typography>
                ) : (
                  <Typography className={classes.amountOutgoing}>
                    {`- ${row.amount}`}
                  </Typography>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div style={{ float: "right", padding: 20 }}>
        <PaginationComponent />
      </div>
    </TableContainer>
  );
};

export default TransactionsDetailsTable;
