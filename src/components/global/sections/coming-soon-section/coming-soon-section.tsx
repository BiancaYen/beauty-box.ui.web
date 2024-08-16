import classNames from 'classnames';
import React, { FC } from 'react';

// Components
import { ComingSoonCarousel } from '@/components/global/carousels/coming-soon-carousel';
import { SectionHeading1 } from '@/components/global/section-heading-1';

// Types
import { ComingSoonSlideProps } from '../../carousels/coming-soon-carousel/coming-soon-carousel';

// Types
export interface ComingSoonSectionProps {
    alignDesktopContent?: 'start' | 'center',
    data: ComingSoonSlideProps[],
    heading: string,
}

export const ComingSoonSection: FC<ComingSoonSectionProps> = ({
    alignDesktopContent = 'center',
    data,
    heading,
}) => {
    const alignmentClass = alignDesktopContent === 'center' ? 'md:items-center' : 'md:items-start';

    return (
        <section className={classNames('flex space-y-4 flex-col bg-system-default-tint-3 py-5 md:py-7 items-start', alignmentClass)}>
            <SectionHeading1
                className="px-6"
                heading={heading}
                variant="normal"
            />
            <ComingSoonCarousel
                classes={{ wrapper: classNames(alignDesktopContent === 'center' ? 'md:!w-fit' : 'w-full', '!px-4') }}
                data={data}
            />
        </section>
    );
};
