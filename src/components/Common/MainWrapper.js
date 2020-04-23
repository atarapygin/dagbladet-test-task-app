import React from 'react';
import cn from 'classnames';
import { Grid, createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
      mainWrapper: {},
      contentWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 1rem',
      }
    }),
);
 
const MainWrapper = ({ children, styles }) => {
    const classes = useStyles();

    return (
        <Grid container justify="center" className={cn(classes.mainWrapper, styles)}>
            <Grid item className={classes.contentWrapper} md={10} xs={12}>
                {children}
            </Grid>
        </Grid>
    );
};
 
export default MainWrapper;