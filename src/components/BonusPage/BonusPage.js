import React from 'react';
import withData from '../../hocs/withData';
import Spinner from '../Spinner/Spinner';
import MainWrapper from '../Common/MainWrapper';
import MainMessage from '../Common/MainMessage';
import { createStyles, makeStyles, Paper } from '@material-ui/core';
import { getColumns } from '../../helpers/common';

const useStyles = makeStyles((theme) =>
    createStyles({
      bonusPageContentWrapper: {
         marginTop: theme.spacing(8),
      },
      articlesListWrapper: {
         padding: theme.spacing(1),
         margin: 0,
         width: '100%',
      },
      articlesListItem: {
         padding: theme.spacing(2),
         marginTop: theme.spacing(2),
         '&:hover': {
            cursor: 'pointer',
            boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
         }
      },
      articlesLink: {
         textDecoration: 'none',
      }
    }),
);
 
const BonusPage = ({ loading, data }) => {
   const classes = useStyles();

   const getArticles = (columns) => {
      return columns.reduce((acc, currentArticle) => {
         const { title, url } = currentArticle;
         return acc.concat({
            title,
            url,
         });
      }, []);
   }

   const renderArticles = (articles) => {
      if (!articles.length) {
         return <MainMessage message='There is no data' />;
      }

      return articles.map(
         article => {
               return (
               <a href={article.url} className={classes.articlesLink}>
                  <Paper elevation={1} className={classes.articlesListItem} key={article.title}>
                     {article.title}
                  </Paper>
               </a>
            )
         }
      )
   };

   const articles = data.length ? data.map(getColumns).map(getArticles).flat() : [];

    return (
      <MainWrapper styles={classes.bonusPageContentWrapper}>
         {loading ?
            <Spinner /> :
            <ul className={classes.articlesListWrapper}>
               {renderArticles(articles)}
            </ul>
         }
       </MainWrapper>
    );
};

export default withData(BonusPage);