import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';

// Types
export interface TabItem {
    component: ReactNode,
    index: number,
    tab: string,
}

export interface TabsUnderlinedProps {
    activeTabIndex?: number,
    items: Omit<TabItem, 'component'>[],
    onClick: (index: number) => void,
}

export const TabsUnderlined: FC<TabsUnderlinedProps> = ({
    activeTabIndex = 1,
    items,
    onClick,
}) => (
    <div className="relative w-full">
        <ul className="flex border-b border-system-default-tint-2">
            {items.map(({ index, tab }) => (
                <li
                    style={{
                        flex: `${(100 / items.length)}% 0 0 `,
                    }}
                >
                    <button
                        className={classNames(
                            'w-full text-base px-1 py-1 outline-none uppercase transition-all',
                            activeTabIndex === index - 1
                                ? 'text-primary-default font-semibold animate-bounce-once'
                                : 'text-system-default-default hover:!bg-primary-tint-2 font-medium',
                        )}
                        key={index}
                        type="button"
                        value={index}
                        onClick={() => onClick(index)}
                    >
                        {tab}
                    </button>
                </li>
            ))}
        </ul>
        <div
            className="absolute bottom-0 left-0 h-[2px] w-full origin-top-left bg-primary-default transition-transform"
            style={{
                transform: `translateX(${((100 / items.length) * activeTabIndex)}%) scaleX(0.333)`,
            }}
        />

    </div>
);

