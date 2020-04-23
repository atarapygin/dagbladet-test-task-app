import React, { useState, useEffect } from 'react';
import ArticleTitle from './ArticleTitle';
import { useConfirm } from "material-ui-confirm";
import { Edit as EditIcon, Delete as DeleteIcon, Undo as UndoIcon } from '@material-ui/icons';
import { createStyles, makeStyles, Grid } from '@material-ui/core';
 
const useStyles = makeStyles((theme) =>
    createStyles({
      row: {
         padding: theme.spacing(1),
      },
      column: {
         position: 'relative',
         padding: theme.spacing(1)
      },
      controlIcons: {
         position: 'absolute',
         zIndex: 1,
         right: '15px',
         top: '15px',
         background: 'white',
         borderRadius: '5px',
         padding: '5px',
         display: 'flex',
         '& > svg': {
            margin: '0 3px',
            padding: '3px',
         },
         '& > svg:hover': {
            color: 'white',
            background: 'black',
            borderRadius: '5px',
            cursor: 'pointer',
         }
      },
      articleWrapper: {
         color: 'white',
         textDecoration: 'none',
         '&:hover': {
            textDecoration: 'underline',
         }
      },
      figureStyles: {
         margin: 0,
      },
      figcaptionStyles: {
         fontSize: '1.8rem',
         color: 'white',
         fontWeight: 700,
         background: 'rgba(0, 0, 0, 0.7)',
      },
      articleImg: {
         width: '100%',
      },
      undoPrompt: {
         display: 'flex',
         right: '50px',
         bottom: '50px',
         position: 'fixed',
         width: '150px',
         cursor: 'pointer',
         background: 'red',
         zIndex: 2,
         textTransform: 'uppercase',
         color: 'white',
         alignItems: 'center',
         justifyContent: 'space-evenly',
         borderRadius: '10px',
         padding: theme.spacing(2),
         '&:hover': {
            background: 'white',
            border: '1px solid red',
            color: 'red',
         }
      },
    }),
);

const MULTIPLICATION_FACTOR = 100;

const ColumnComponent = ({ column }) => {
   const classes = useStyles();
   const confirm = useConfirm();

   const [titleEditMode, setTitleEditMode] = useState(false);
   const [componentVisibility, setComponentVisibility] = useState(true);
   const [undoPromptVisibility, setUndoPromptVisibility] = useState(false);

   const { title, width, imageUrl, url } = column;

   const imageWidth = width*MULTIPLICATION_FACTOR;

   useEffect(() => {
      return () => {
         setTimeout(() => setUndoPromptVisibility(false), 5000);
      }
   })

   const onEdit = (e) => {
      e.stopPropagation();
      if (!titleEditMode) {
         setTitleEditMode(true);
      }
   }

   const onDelete = () => {
      confirm({ 
         description: `This will permanently delete ${title}.`,
         confirmationButtonProps: {
            color: 'secondary',
         },
         cancellationButtonProps: {
            color: 'primary',
         }
       })
         .then(() => {
            setComponentVisibility(false);
            setUndoPromptVisibility(true);
         });
    };

    const onRevert = () => {
      setComponentVisibility(true);
      setUndoPromptVisibility(false);
   }

    return (
       <>
        {componentVisibility && 
            <Grid item sm={width} xs={12} className={classes.column}>
               <div className={classes.controlIcons}>
                  <EditIcon onClick={onEdit} />
                  <DeleteIcon onClick={onDelete} />
               </div>
               <a href={url} className={classes.articleWrapper}>
                  <figure className={classes.figureStyles}>
                     <img src={`${imageUrl}&width=${imageWidth}`} alt={title} className={classes.articleImg}/>
                     <figcaption className={classes.figcaptionStyles}>
                        <ArticleTitle title={title} editMode={titleEditMode} setTitleEditMode={setTitleEditMode} />
                     </figcaption>
                  </figure>
               </a>
            </Grid>
         }
         {undoPromptVisibility && 
            <div className={classes.undoPrompt} onClick={onRevert}>
               <span>Undo</span>
               <UndoIcon/>
            </div>
         }
      </>
    );
};
 
export default ColumnComponent;