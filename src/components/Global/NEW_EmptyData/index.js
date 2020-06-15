import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import constant from "configs/constants";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: 30,
        paddingBottom: 30,
        textAlign: 'center'
    },
    description: {
        marginTop: 10,
        color: theme.palette.color.darkGrey
    }
}));

const EmptyTable = ({description}) => {
    const classes = useStyles();

    return(
        <Container className={classes.container}>
            <img src={`${constant.PREFIX_IMAGE}/icon/empty.svg`} alt='empty-data'/>
            <Typography className={classes.description}>{description}</Typography>
        </Container>
    );
};

export default EmptyTable;
