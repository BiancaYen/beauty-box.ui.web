import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';

// Types
export interface TabItem {
    component: ReactNode,
    index: number,
    tab: string,
}

export interface TabToggleProps {
    activeTabIndex?: number,
    items: Omit<TabItem, 'component'>[],
    onClick: (index: number) => void,
}

export const TabToggle: FC<TabToggleProps> = ({
    activeTabIndex = 1,
    items,
    onClick,
}) => (
    <div className="flex min-w-[30%] overflow-hidden rounded-md border border-primary-default bg-primary-default shadow-md lg:w-[25%]">
        {items.map(({ index, tab }) => (
            <button
                className={classNames(
                    'bg-transparent text-xxs font-medium px-1 py-1 w-full outline-none',
                    activeTabIndex === index - 1
                        ? 'bg-primary-default text-default-white'
                        : '!bg-defaultWhite !text-primary-default hover:!bg-primary-tint-2',
                )}
                key={index}
                type="button"
                value={index}
                onClick={() => onClick(index)}
            >
                {tab}
            </button>
        ))}
    </div>
);

