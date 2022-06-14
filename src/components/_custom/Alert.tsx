import * as React from 'react';
import Alert, { AlertColor } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface BaseAlertProps {
    type: AlertColor | undefined,
    message: string
}

const BaseAlert: React.FC<BaseAlertProps> = (props) => {
    const { type, message } = props;
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity={type}>{message}</Alert>
        </Stack>
    );
}


export default BaseAlert;