import React from 'react';
import Modal from 'react-modal';

interface CustomModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onRequestClose, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={{
                base: 'animate-modal',
                afterOpen: 'animate-modal-after-open',
                beforeClose: 'animate-modal-before-close'
            }}
            style={{
                overlay: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(3px)',
                },
                content: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #FFFFFF',
                    borderRadius: '10px',
                    width: '50%',
                    height: '50%',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    margin: 'auto',
                    backgroundColor: '#0a0a0a',
                    padding: '20px',
                    color: 'white',
                },
            }}
        >
            {children}
        </Modal>
    );
};

export default CustomModal;