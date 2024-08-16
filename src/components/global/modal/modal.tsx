import React, { ReactNode } from 'react';
import { CloseIcon } from '@/components/icons';
import { IconButton } from '@/components/global/icon-button';

// Types
interface ModalProps {
    children: ReactNode,
    className?: string,
    isActive?: boolean,
    onClose: () => void,
}

export const Modal: React.FC<ModalProps> = ({
    children,
    className = '',
    isActive = false,
    onClose,
}) => {
    if (!isActive) {
        return null;
    }

    return (
        <div className="fixed z-50 grid h-full w-full place-items-center">
            <input
                className="absolute inset-0 bg-default-white opacity-40"
                type="button"
                tabIndex={0}
                onClick={onClose}
            />
            <div className="relative mx-5 h-[61%] max-h-[24rem] w-[88%] max-w-[21rem] overflow-hidden rounded-2xl bg-default-white shadow-modal">
                <IconButton
                    className="absolute right-2.5 top-2.5 flex h-9 w-9 items-center justify-center"
                    onClick={onClose}
                >
                    <CloseIcon height="15px" width="14px" />
                </IconButton>
                <div className={className}>
                    {children}
                </div>
            </div>
        </div>
    );
};
