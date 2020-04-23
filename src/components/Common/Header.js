import React from 'react';
import { NavLink } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core';
import MainWrapper from './MainWrapper';

const useStyles = makeStyles((theme) =>
    createStyles({
      navigationWrapper: {
        background: '#D60000',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 2,
      },
      navigationPanel: {
        textAlign: 'left',
        width: '100%',
      },
      navigationLink: {
        color: 'white',
        padding: '1rem',
        fontSize: '1.2rem',
        display: 'inline-block',
        textDecoration: 'none',
      },
      activeLink: {
        background: '#861212',
      }
    }),
);

const Header = () => {
  const classes = useStyles();

  return (
    <MainWrapper styles={classes.navigationWrapper}>
        <nav className={classes.navigationPanel}>
          <NavLink 
            to="/"
            exact
            className={classes.navigationLink}
            activeClassName={classes.activeLink}>Home</NavLink>
          <NavLink 
            to="/bonus"
            className={classes.navigationLink}
            activeClassName={classes.activeLink}>Bonus</NavLink>
        </nav>
    </MainWrapper>
  )
}

export default Header;
