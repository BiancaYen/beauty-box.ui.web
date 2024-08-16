import Link from 'next/link';
import React, { FC } from 'react';
import parser from 'html-react-parser';

// Components
import { ExploreCoachesCard } from '@/components/global/cards/coach/placeholders/explore-coaches-card';
import { Paragraph } from '@/components/global/paragraph';
import { SectionHeading1 } from '@/components/global/section-heading-1';
import { CoachesCarousel } from '@/components/global/carousels/coaches-carousel';

// Types
import { CoachCardPropsExtended } from '../other-coaches-section/other-coaches-section';

export interface YourCoachesSectionProps {
    data?: CoachCardPropsExtended[],
    heading: string,
    noData: {
        copy: string,
        link: string,
    },
}

export const YourCoachesSection: FC<YourCoachesSectionProps> = ({
    data,
    heading,
    noData,
}) => {
    const hasData = data && data.length > 0;

    const {
        copy: noDataCopy,
        link: noDataLink,
    } = noData;

    return (
        <section>
            <SectionHeading1
                heading={heading}
            />

            {!hasData && (
                <Paragraph className="py-2.5">
                    {parser(noDataCopy)}
                </Paragraph>
            )}

            {hasData ? (
                <CoachesCarousel
                    classes={{
                        wrapper: 'mt-6',
                    }}
                    data={data}
                />
            ) : (
                <Link href={noDataLink}>
                    <ExploreCoachesCard />
                </Link>
            )}
        </section>
    );
};

