'use client';

import React, {
    FC,
    KeyboardEvent,
    ReactNode,
} from 'react';
import { twMerge } from 'tailwind-merge';

// Types
interface IconButtonProps {
    children: ReactNode,
    className?: string,
    onClick: () => void,
}

export const IconButton: FC<IconButtonProps> = ({
    children,
    className,
    onClick,
}) => {
    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter') {
            onClick();
        }
    };

    return (
        <button
            className={twMerge(
                'flex h-8 w-8 items-center justify-center rounded-full text-primary-default hover:bg-primary-tint-2 active:scale-90',
                className,
            )}
            type="button"
            onClick={onClick}
            onKeyDown={handleKeyDown}
        >
            {children}
        </button>
    );
};
