import React, { useState } from 'react';
import { 
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {
    CheckCircleOutline,
    CancelOutlined,
    EditOutlined
} from '@material-ui/icons';
import EmptyData from 'components/Global/NEW_EmptyData';
import EditRecipient from '../editRecipient';

const useStyles = makeStyles((theme) => ({
    tableHeader: {
        fontWeight: 700,
        color: theme.palette.color.black
    },
    tableContent: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    checkIcon: {
        width: 30,
        color: theme.palette.color.green
    },
    crossIcon: {
        width: 30,
        color: theme.palette.color.red
    },
    editIcon: {
        width: 30,
        color: theme.palette.color.grey,
        border: `1px solid ${theme.palette.color.borderColor}`,
        borderRadius: 5
    }
}));

const RecipientsList = ({data}) => {
    const classes = useStyles();

    const [editRecipientModal, setEditRecipientModal] = useState(false);

    const showEditRecipientModal = () => {
        setEditRecipientModal(true);
    };

    const hideEditRecipientModal = () => {
        setEditRecipientModal(false);
    };

    return(
        <div>
            {data.length === 0 ? 
                <EmptyData description="After uploading CSV file, the recipients list will appear here."/>
                :
                <TableContainer style={{maxHeight: 400}}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableHeader} align="left">Status</TableCell>
                                <TableCell className={classes.tableHeader} align="left">Bank</TableCell>
                                <TableCell className={classes.tableHeader} align="left">Account No.</TableCell>
                                <TableCell className={classes.tableHeader} align="left">Recipient(s)</TableCell>
                                <TableCell className={classes.tableHeader} align="left">Amount</TableCell>
                                <TableCell className={classes.tableHeader} align="left"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.account}>
                                    <TableCell className={classes.tableContent} align="left">{
                                        row.status === 'success' ? <CheckCircleOutline className={classes.checkIcon}/> : <CancelOutlined className={classes.crossIcon}/>
                                    }</TableCell>
                                    <TableCell className={classes.tableContent} align="left">{row.bank}</TableCell>
                                    <TableCell className={classes.tableContent} align="left">{row.account}</TableCell>
                                    <TableCell className={classes.tableContent} align="left">{row.recipient}</TableCell>
                                    <TableCell className={classes.tableContent} align="left">{row.amount}</TableCell>
                                    <TableCell className={classes.tableContent} align="left">
                                        <Button onClick={showEditRecipientModal}>
                                            <EditOutlined className={classes.editIcon}/>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
            <EditRecipient show={editRecipientModal} hideFunction={hideEditRecipientModal}/>
        </div>
    );
};

export default RecipientsList;
