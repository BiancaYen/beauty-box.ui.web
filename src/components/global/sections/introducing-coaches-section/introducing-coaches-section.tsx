'use client';

import React, { FC } from 'react';

// Components
import { CoachesCarousel } from '@/components/global/carousels/coaches-carousel';
import { SectionHeading1 } from '@/components/global/section-heading-1';

// Types
import { CoachCardPropsExtended } from '@/components/global/sections/other-coaches-section';

export interface IntroducingCoachesSectionProps {
    action: {
        copy: string,
        link: string,
    },
    data: CoachCardPropsExtended[],
    heading: string,
}

export const IntroducingCoachesSection: FC<IntroducingCoachesSectionProps> = ({
    action,
    data,
    heading,
}) => {
    const {
        copy: actionCopy = '',
        link: actionLink = '',
    } = action;

    return (
        <section className=" pl-5">
            <SectionHeading1
                action={{
                    copy: actionCopy,
                    isHiddenDesktop: true,
                    link: actionLink,
                }}
                heading={heading}
            />

            <CoachesCarousel
                classes={{
                    wrapper: 'mt-5 !overflow-x-visible',
                }}
                data={data}
            />
        </section>
    );
};

