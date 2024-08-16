'use client';

import React, {
    ElementType,
    FC,
    KeyboardEvent,
    ReactNode,
    useState,
} from 'react';
import classNames from 'classnames';

// Components
import { CaretUpIcon } from '@/components/icons';

// Types
interface AccordionProps {
    children: ReactNode,
    className?: string,
    heading: string,
    headingJustify?: 'justify-between' | 'justify-center',
    headingTag?: ElementType,
    isActive?: boolean,
    isDisabled?: boolean,
    variant?: 'accordion' | 'menu',
}

export const Accordion: FC<AccordionProps> = ({
    children,
    className,
    heading,
    headingJustify = 'justify-between',
    headingTag: HeadingTag = 'h2',
    isActive: isActiveProp = false,
    isDisabled = false,
    variant = 'accordion',
}) => {
    const [isActive, setIsActive] = useState(isActiveProp);

    const handleToggle = () => {
        if (!isDisabled) {
            setIsActive(!isActive);
        }
    };

    const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            handleToggle();
        }
    };

    return (
        <div
            className={classNames(
                className || 'p-4',
            )}
        >
            <div
                className={classNames(
                    'flex items-center',
                    isDisabled ? 'cursor-default' : 'cursor-pointer',
                    headingJustify,
                )}
                role="button"
                tabIndex={0}
                onClick={handleToggle}
                onKeyDown={handleKeyPress}
            >
                <HeadingTag
                    className={classNames(
                        'text-xs',
                        variant === 'menu' ? 'font-bold' : 'text-primary-default',
                        !isDisabled && variant === 'accordion' && 'hover:underline',
                        !isDisabled && variant === 'menu' && 'hover:text-primary-default',
                    )}
                >
                    {heading}
                </HeadingTag>

                <div
                    className={classNames(
                        isActive ? 'rotate-0' : 'rotate-180',
                        'px-2.5',
                    )}
                >
                    <CaretUpIcon />
                </div>
            </div>
            <div>
                {isActive && (
                    <div className="mt-2">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};
