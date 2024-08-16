import React from 'react';
import classNames from 'classnames';
import parse from 'html-react-parser';

// Types
interface SectionHeading1Props {
    classes?: {
        heading?: string,
        wrapper?: string,
    },
    heading: string,
    subheading: string,
}

export const SectionHeading6: React.FC<SectionHeading1Props> = ({
    classes,
    heading,
    subheading,
}) => (
    <div
        className={classNames(
            'font-bold',
            classes?.wrapper,
        )}
    >
        <h2 className="mb-0.5 text-sm">
            {subheading}
        </h2>
        <h1
            className={classNames(
                'text-[2.375rem] leading-[2.6875rem] text-primary-default',
                classes?.heading,
            )}
        >
            {parse(heading)}
        </h1>
    </div>
);
