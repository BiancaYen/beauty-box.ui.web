import React from 'react';
import classNames from 'classnames';

// Types
interface SectionHeading4Props {
    className?: string,
    heading: string,
    headingPosition?: 'bottom' | 'top',
    headingSize?: 'normal' | 'small',
    headingTag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    subheading: string,
}

export const SectionHeading4: React.FC<SectionHeading4Props> = ({
    className = '',
    heading,
    headingPosition = 'top',
    headingSize = 'normal',
    headingTag: HeadingTag = 'h2',
    subheading,
}) => (
    <div
        className={classNames(
            'flex',
            headingPosition === 'top' ? 'flex-col' : 'flex-col-reverse',
            className,
        )}
    >
        <HeadingTag
            className={classNames(
                'font-bold',
                headingSize === 'normal' ? 'text-base leading-5' : 'text-xs leading-[1.032rem]',
                headingSize === 'small' && headingPosition === 'top' && 'mb-1',
            )}
        >
            {heading}
        </HeadingTag>
        <p
            className={classNames(
                'text-xxs',
                headingSize === 'normal' ? 'leading-[0.9rem] tracking-[0.0125rem]' : 'leading-[0.832rem]',
            )}
        >
            {subheading}
        </p>
    </div>
);
