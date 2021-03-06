import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const CustomSnackbar = (props: any) => {
    const { openSnackBar, handleClose, message } = props;


    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div>
            <Snackbar
                open={openSnackBar}
                autoHideDuration={4000}
                onClose={handleClose}
                message={message}
                action={action}
            />
        </div>
    );
}

export default CustomSnackbar;