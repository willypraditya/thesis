import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableFooter,
    Typography,
    Link,
    Chip
} from '@material-ui/core';
import PaginationComponent from 'components/Global/NEW_Pagination';
import TableContainer from '@material-ui/core/TableContainer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    tableHeader: {
        fontWeight: 700,
        color: theme.palette.color.black
    },
    tableContent: {
        paddingTop: 30,
        paddingBottom: 30,
    },
    idText: {
        color: theme.palette.color.blue,
        cursor: 'pointer'
    },
    completedLabel: {
        color: theme.palette.color.green,
        backgroundColor: theme.palette.color.transparentGreen,
        border: `1px solid ${theme.palette.color.green}`
    },
    pendingLabel: {
        color: theme.palette.color.yellow,
        backgroundColor: theme.palette.color.transparentYellow,
        border: `1px solid ${theme.palette.color.lightYellow}`
    },
    failedLabel: {
        color: theme.palette.color.red,
        backgroundColor: theme.palette.color.transparentRed,
        border: `1px solid ${theme.palette.color.red}`
    },
    amountIncoming: {
        color: theme.palette.color.darkGreen,
        fontWeight: 700
    },
    amountOutgoing: {
        color: theme.palette.color.black,
        fontWeight: 700
    }
}));

const transactionsData = [
    {
        id: '292927cB-7abc-a',
        date: 'Nov 9, 2019 12:19',
        recipient: 'Willy Praditya',
        category: 'Utilities',
        type: 'Batch Disbursement',
        status: 'completed',
        amount: 'Rp. 20.000.000,12',
        amountType: 'incoming'
    },
    {
        id: '292927cB-7abc-a',
        date: 'Nov 9, 2019 12:19',
        recipient: 'Willy Praditya',
        category: 'Utilities',
        type: 'Batch Disbursement',
        status: 'pending',
        amount: 'Rp. 20.000.000,12',
        amountType: 'outgoing'
    },
    {
        id: '292927cB-7abc-a',
        date: 'Nov 9, 2019 12:19',
        recipient: 'Willy Praditya',
        category: 'Utilities',
        type: 'Batch Disbursement',
        status: 'failed',
        amount: 'Rp. 20.000.000,12',
        amountType: 'incoming'
    }
];

const label = (status, classes) => {
    if(status === 'completed'){
        return <Chip className={classes.completedLabel} label='Completed'/>;
    }else if(status === 'pending'){
        return <Chip className={classes.pendingLabel} label='Pending'/>;
    }else{
        return <Chip className={classes.failedLabel} label='Failed'/>;
    }
};

const TransactionsTable = () => {
    const classes = useStyles();

    return(
        <TableContainer className={classes.table}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeader} align="left">Ext. ID</TableCell>
                        <TableCell className={classes.tableHeader} align="left">Date</TableCell>
                        <TableCell className={classes.tableHeader} align="left">Recipient(s)</TableCell>
                        <TableCell className={classes.tableHeader} align="left">Category</TableCell>
                        <TableCell className={classes.tableHeader} align="left">Type</TableCell>
                        <TableCell className={classes.tableHeader} align="left">Status</TableCell>
                        <TableCell className={classes.tableHeader} align="left">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactionsData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className={classes.tableContent} align="left">
                                <Typography>
                                    <Link className={classes.idText} onClick={() => console.log('clicked')}>
                                        {row.id}
                                    </Link>
                                </Typography>
                            </TableCell>
                            <TableCell className={classes.tableContent} align="left">{row.date}</TableCell>
                            <TableCell className={classes.tableContent} align="left">{row.recipient}</TableCell>
                            <TableCell className={classes.tableContent} align="left">{row.category}</TableCell>
                            <TableCell className={classes.tableContent} align="left">{row.type}</TableCell>
                            <TableCell className={classes.tableContent} align="left">
                                {label(row.status, classes)}
                            </TableCell>
                            <TableCell className={classes.tableContent} align="left">
                                {row.amountType === 'incoming' ?
                                    <Typography className={classes.amountIncoming}>
                                        {`+ ${row.amount}`}
                                    </Typography> 
                                    :
                                    <Typography className={classes.amountOutgoing}>
                                        { `- ${row.amount}`}
                                    </Typography>
                                }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            
            <div style={{float: 'right', padding: 20}}>
                <PaginationComponent/>
            </div>
        </TableContainer>
    );
};

export default TransactionsTable;
