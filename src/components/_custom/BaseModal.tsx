import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


interface BaseModalProps {
    isOpen: boolean,
    handleCloseModal: (param: React.SetStateAction<boolean>) => void | null,
    children: JSX.Element
}

const BaseModal: React.FC<BaseModalProps> = (props) => {
    const { isOpen, handleCloseModal, children } = props;

    return (
        <React.Fragment>
            <Modal
                open={isOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>{children}</Box>
            </Modal>
        </React.Fragment>
    );
}


export default BaseModal;
