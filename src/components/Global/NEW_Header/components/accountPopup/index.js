import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import handling from 'utils/handling';

import {
    Popover,
    List,
    ListItem,
    ListItemText,
    Grid,
    Divider,
    Typography,
    Button
} from '@material-ui/core';
import { SettingsOutlined, PowerSettingsNewOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    popover:{
        marginTop: 18
    },
    list:{
        width: 200
    }
}));

const AccountPopup = ({anchorEl, handleClose }) => {
    const classes = useStyles();

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const onClickMyAccount = () => {
        handling.redirectUrl('/dashboard/account');
        handleClose();
    };

    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            className={classes.popover}
        >
            <List className={classes.list}>
                <ListItem button={true} onClick={onClickMyAccount}>
                    <Grid container>
                        <Grid item xs={3}>
                            <SettingsOutlined/>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography>My Account</Typography>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem button={true}>
                    <Grid item xs={3}>
                        <PowerSettingsNewOutlined/>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography>Logout</Typography>
                    </Grid>
                </ListItem>
            </List>
        </Popover>
    );
};

export default AccountPopup;
