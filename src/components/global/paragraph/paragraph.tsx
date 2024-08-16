import classNames from 'classnames';
import React, { ReactNode } from 'react';

// Types
interface ParagraphProps {
    children: ReactNode | string,
    className?: string,
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => (
    <p
        className={
            classNames(
                'text-normal text-xs [&_strong]:font-bold',
                className,
            )
        }
    >
        {children}
    </p>
);
