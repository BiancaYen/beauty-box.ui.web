'use client';

import React from 'react';
import Link from 'next/link';

// Types
import { SubmissionItem } from '@/components/global/cards/submission-card';

import { ExploreCard } from '@/components/global/cards/explore-card';
import { SectionHeading1 } from '@/components/global/section-heading-1';
import { SubmissionCard } from '@/components/global/cards/submission-card';
import { SwiperSlide } from 'swiper/react';
import { CoachCard } from '@/components/global/cards/coach/coach-card';
import { AddMoreCard } from '@/components/global/cards/placeholder/add-more-card';
import { Carousel } from '@/components/global/carousel';

interface ExploreSectionProps {
    data: SubmissionItem[],
}

export const ExploreSection = ({ data }: ExploreSectionProps) => (
    <section>
        <SectionHeading1
            action={{
                copy: 'View More',
                href: '/explore',
            }}
            heading="Explore"
        />

        <Carousel
            hasFreeScroll
            classes={{
                wrapper: '!pl-5 !overflow-y-visible',
            }}
        >
            {data.map((item) => (
                <SwiperSlide
                    className="mr-5 !w-[10rem]"
                    key={item.id}
                >
                    <ExploreCard {...item} key={item.id} />
                </SwiperSlide>
            ))}
        </Carousel>
    </section>
);
