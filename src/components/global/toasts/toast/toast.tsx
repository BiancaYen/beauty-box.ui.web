import classNames from 'classnames';
import React, { ReactNode } from 'react';

// Icons
import {
    BookmarkIcon,
    CircleCheckIcon,
    CloseIcon,
    WarningIcon,
} from '@/components/icons';

// Types
type ToastTypes = 'error' | 'bookmark' | 'success';

interface ToastProps {
    icon?: ReactNode,
    children: ReactNode | string,
    type?: ToastTypes,
    onClose: () => void,
}

type ToastIcons = {
    [key in ToastTypes]: ReactNode;
};

const icons: ToastIcons = {
    bookmark: (
        <BookmarkIcon
            fill="var(--color-system-defaultTint1)"
            height="18"
            width="13"
        />
    ),
    error: <WarningIcon />,
    success: <CircleCheckIcon />,
};

export const Toast: React.FC<ToastProps> = ({
    children,
    icon,
    type = 'success',
    onClose,
}) => (
    <div className="flex items-center gap-5 rounded-2xl bg-default-white px-5 py-2.5 xs:w-[19.375rem]" role="alert">
        {icon || icons[type]}
        <p className="flex-[80%] text-xxs text-system-default-default">
            {children}
        </p>
        <button
            aria-label="close toast"
            className={classNames(
                'relative after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:p-3.5 after:content-[\'\'] ',
                'text-primary-default hover:text-primary-shade-1 hover:cursor-pointer',
            )}
            type="button"
            onClick={onClose}
        >
            <CloseIcon
                className="fill-current"
                // set fill to inherit for fill-current to work
                fill="inherit"
            />
        </button>
    </div>
);
