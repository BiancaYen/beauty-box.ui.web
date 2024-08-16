'use client';

import React from 'react';
import Link from 'next/link';

// Component
import { FeedCard } from '@/components/global/cards/feed-card';
import { Filters } from '@/components/global/filters';
import { Grid } from '@/components/global/grid';

// Types
import { SubmissionCard, SubmissionItem } from '@/components/global/cards/submission-card';
import { Card } from '../../cards/card';
import { SwiperSlide } from 'swiper/react';
import classNames from 'classnames';
import { FaBarsStaggered } from 'react-icons/fa6';
import {SectionHeading1} from '@/components/global/section-heading-1';
import {SectionHeading2} from '@/components/global/section-heading-2';
import {SectionHeading3} from '@/components/global/section-heading-3';
import {SectionHeading4} from '@/components/global/section-heading-4';
import {Carousel} from '@/components/global/carousel';
import {WishListCard} from '@/components/global/cards/wish-list-card';

interface FeedSectionProps {
    data: SubmissionItem[],
}

export const BookmarkSection = ({ data }: FeedSectionProps) => (
    <section>
        <SectionHeading1
            action={{
                copy: 'View More',
                link: '/bookmarks',
            }}
            heading="Loved These"
            additionalInfo="20"
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
                    <FeedCard
                        key={item.id}
                        {...item}
                    />
                </SwiperSlide>
            ))}
        </Carousel>
    </section>
);
