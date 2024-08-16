import React, { FC } from 'react';

// Components
import { CoachesCarousel } from '@/components/global/carousels/coaches-carousel';
import { Paragraph } from '@/components/global/paragraph';
import { SectionHeading1 } from '@/components/global/section-heading-1';

// Types
import { CoachCardProps } from '@/components/global/cards/coach/coach-card';

export interface CoachCardPropsExtended extends CoachCardProps {
    isBookmarkActive: boolean,
}

interface OtherCoachesSectionProps {
    action: {
        copy: string,
        link: string,
    },
    copy: string,
    data: CoachCardPropsExtended[],
    heading: string,
}

export const OtherCoachesSection: FC<OtherCoachesSectionProps> = ({
    action,
    copy,
    data,
    heading,
}) => {
    const {
        copy: actionCopy = '',
        link: actionLink = '',
    } = action;

    return (
        <section>
            <SectionHeading1
                action={{
                    copy: actionCopy,
                    isHiddenDesktop: true,
                    link: actionLink,
                }}
                heading={heading}
            />
            <Paragraph className="pb-5 pt-2.5">
                {copy}
            </Paragraph>

            <CoachesCarousel
                data={data}
            />
        </section>
    );
};

