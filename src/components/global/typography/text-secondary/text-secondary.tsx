import React from 'react';
import classNames from 'classnames';

// Types
interface TextSecondaryProps {
    children?: string,
    className?: string,
    tag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span',
    isCenterAligned?: boolean,
}

export const TextSecondary: React.FC<TextSecondaryProps> = ({
    children,
    className,
    tag: HeadingTag = 'h2',
    isCenterAligned = true,
}) => (
    <HeadingTag
        className={classNames(
            'text-base font-secondary leading-5 text-primary-tint-1',
            isCenterAligned && 'text-center',
            className,
        )}
    >
        {children}
    </HeadingTag>
);
