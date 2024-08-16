import React from 'react';
import classNames from 'classnames';

// Types
interface SectionHeading3Props {
    className?: string,
    heading: string,
    headingTag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
}

export const SectionHeading3: React.FC<SectionHeading3Props> = ({
    className = '',
    heading,
    headingTag: HeadingTag = 'h2',
}) => (
    <HeadingTag
        className={classNames(
            'text-base font-bold uppercase leading-5 text-default-white',
            className,
        )}
    >
        {heading}
    </HeadingTag>
);
