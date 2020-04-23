import React, { useState } from 'react';
import { Save as SaveIcon, Close as CloseIcon } from '@material-ui/icons';
import { createStyles, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapper: {
            textAlign: 'center',
        },
        editableInputWrapper: {
            width: '100%',
        },
        editableInput: {
            flexGrow: 2,
            padding: '5px',
            marginRight: '5px',
            borderRadius: '5px',
            border: '1px solid black',
        },
        editableInputIcon: {
            marginLeft: theme.spacing(1),
        }
    }),
); 

const ArticleTitle = ({ title, editMode, setTitleEditMode }) => {
    const classes = useStyles();

    const [titleValue, setTitleValue] = useState(title);
    const [lastSavedTitle, setLastSavedTitle] = useState(title);

    const onSave = (e) => {
        e.preventDefault();
        setLastSavedTitle(titleValue);
        setTitleEditMode(false);  
    };

    const onClose = (e) => {
        e.preventDefault();
        setTitleValue(lastSavedTitle);
        setTitleEditMode(false);
    };

    const onKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose(e);
        }
        if (e.key === 'Enter') {
            onSave(e);
        }
    };

    const renderInput = () => {
        return (
            <>
                <input
                    autoFocus
                    type='text'
                    className={classes.editableInput}
                    value={titleValue}
                    onKeyDown={onKeyDown}
                    onChange={e => setTitleValue(e.currentTarget.value)} />
                <SaveIcon onClick={onSave} className={classes.editableInputIcon} />
                <CloseIcon onClick={onClose} className={classes.editableInputIcon} />
            </>
        )
    }

    return (
        <Grid container alignItems='center' justify='center' className={classes.wrapper}>
            {editMode ?
                renderInput() :
                <div>{titleValue}</div>
            }
        </Grid>
    );
}
 
export default ArticleTitle;