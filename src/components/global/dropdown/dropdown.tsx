import React, { ReactNode, useRef } from 'react';
import classNames from 'classnames';

// Utils
import { useClickOutside } from '@/utils/use-click-outside';

interface DropdownProps {
    children: ReactNode,
    className?: string,
    isActive?: boolean,
    onClickOutside?: () => void,
}

export const Dropdown: React.FC<DropdownProps> = ({
    children,
    className = 'p-2.5',
    isActive = false,
    onClickOutside = () => {},
}) => {
    // Refs
    const wrapperRef = useRef(null);

    // Effects
    useClickOutside(wrapperRef, () => {
        if (!onClickOutside) {
            return;
        }
        onClickOutside();
    });

    return (
        <div
            className={classNames(
                'absolute z-10 w-max overflow-hidden rounded-2xl bg-default-white shadow-dropdown',
                isActive ? 'visible' : 'invisible',
                className,
            )}
            ref={wrapperRef}
        >
            {children}
        </div>
    );
};
