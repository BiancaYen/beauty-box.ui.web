import React, { FC } from 'react';
import classNames from 'classnames';

// Types
interface ClickableTagProps {
    children: React.ReactNode,
    className?: string,
    id: string | number,
    isActive?: boolean,
    isDisabled?: boolean,
    onClick: (id: string) => void,
}

export const ClickableTag: FC<ClickableTagProps> = ({
    children,
    className,
    id,
    isActive = false,
    isDisabled = false,
    onClick,
}) => {
    const handleClick = () => {
        if (!isDisabled) {
            onClick(id.toString());
        }
    };

    return (
        <button
            className={classNames(
                'flex items-center justify-center',
                'bg-default-white rounded-full border border-primary-default px-2.5',
                'h-6 w-fit select-none text-xs font-medium tracking-[0.0125rem]',
                'md:h-7 md:px-3',
                isDisabled
                    ? 'pointer-events-none cursor-default border-primary-tint-1'
                    : 'cursor-pointer shadow-filter-mobile active:scale-95 md:shadow-filter-desktop',
                isDisabled && !isActive && 'text-primary-tint-1',
                isDisabled && isActive && 'bg-primary-tint-1',
                isActive ? 'bg-primary-default text-default-white' : 'bg-default-white text-primary-default hover:bg-primary-tint-2',
                className,
            )}
            onClick={handleClick}
            tabIndex={0}
            type="button"
        >
            {children}
        </button>
    );
};
