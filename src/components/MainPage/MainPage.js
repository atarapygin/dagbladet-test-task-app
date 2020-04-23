import React from 'react';
import withData from '../../hocs/withData';
import Spinner from '../Spinner/Spinner';
import MainWrapper from '../Common/MainWrapper';
import MainMessage from '../Common/MainMessage';
import ColumnComponent from './ColumnComponent';
import { getColumns } from '../../helpers/common';
import { createStyles, makeStyles, Grid } from '@material-ui/core';
 
const useStyles = makeStyles((theme) =>
    createStyles({
      mainPageContentWrapper: {
         marginTop: theme.spacing(8),
      },
      row: {
         padding: theme.spacing(1),
      },
    }),
);

const MainPage = ({ loading, data }) => {
   const classes = useStyles();

   const renderRows = (row) => {
      return (
         <Grid container className={classes.row}>
            {row.map(column => <ColumnComponent key={column.title} column={column} />)}
         </Grid>
      );
   }

   const renderContent = (content) => {
      if (!content.length) {
         return <MainMessage message='There is no data' />;
      }

      return (
         <Grid container direction='column'>
            {content.map(renderRows)}
         </Grid>
      );
   }

   const rows = data.length ? data.map(getColumns) : [];

    return (
       <MainWrapper styles={classes.mainPageContentWrapper}>
         {loading ?
            <Spinner /> :
            renderContent(rows)
         }
       </MainWrapper>
    );
};
 
export default withData(MainPage);