import React from 'react';
import MainWrapper from './MainWrapper';
import { Typography, createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapper: {
            marginTop: theme.spacing(20),
        },
    }),
);
 
const MainMessage = ({ message }) => {
    const classes = useStyles();

    return (
        <MainWrapper styles={classes.wrapper}>
            <Typography variant="h1" component="h2">
               {message}
            </Typography>
       </MainWrapper>
    );
};
 
export default MainMessage;