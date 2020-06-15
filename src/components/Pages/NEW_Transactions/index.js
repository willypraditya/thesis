import React from 'react';
import {  
    Grid, 
    Typography, 
    Button, 
    Divider,
    Paper, 
    TextField,
    InputAdornment
} from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import TransactionsTable from './components/transactionsTable';

const useStyles = makeStyles(theme => ({
    transactionsPaper: {
        padding: 40,
        border: `1px solid ${theme.palette.color.borderColor}`,
    },
    transactionHistoryHeader: {
        paddingBottom: 20

    },
    transactionHistoryTitle: {
        fontWeight: 700
    },
    searchLogo: {
        color: theme.palette.color.grey
    },
    searchField: {
        '& .MuiOutlinedInput-root': {
            height: 36,
        },
    },
    filterButton: {
        height: 36,
        border: `1px solid ${theme.palette.color.borderColor}`,
        textTransform: 'none'
    },
    sortByButton: {
        height: 36,
        border: `1px solid ${theme.palette.color.borderColor}`,
        textTransform: 'none'
    },
    divider: {
        paddingBottom: 20
    }
}));

const Transactions = () => {

    const classes = useStyles();

    return(
        <Paper elevation={0} className={classes.transactionsPaper}>
            <Grid container 
                direction='row'
                justify='space-between'
                alignItems='center'
                className={classes.transactionHistoryHeader}
            >
                <Grid item>
                    <Typography className={classes.transactionHistoryTitle}>Transaction History</Typography>
                </Grid>
                <Grid item>
                    <Grid container spacing={1}>
                        <Grid item>
                            <TextField 
                                id="outlined-basic" 
                                placeholder="Search Utilities" 
                                variant="outlined" 
                                size='small'
                                color='primary'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchOutlined className={classes.searchLogo} />
                                        </InputAdornment>
                                    ),
                                }}
                                classes={{root: classes.searchField }}
                            />
                        </Grid>
                        <Grid item>
                            <Button className={classes.filterButton}>
                                Filter
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.sortByButton}>
                                Sort by
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <div className={classes.divider}>
                <Divider/>
            </div>
            <TransactionsTable/>
        </Paper>
    );
};

export default Transactions;
