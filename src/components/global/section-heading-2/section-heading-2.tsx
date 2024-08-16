import React from 'react';
import classNames from 'classnames';

// Types
interface SectionHeading2Props {
    className?: string,
    heading: string,
    headingTag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    isCenterAligned?: boolean,
}

export const SectionHeading2: React.FC<SectionHeading2Props> = ({
    className,
    heading,
    headingTag: HeadingTag = 'h2',
}) => (
    <HeadingTag
        className={classNames(
            'text-3xl font-secondary px-5 pt-10 pb-6 w-full underline underline-offset-5',
            className,
        )}
    >
        {heading}
    </HeadingTag>
);
