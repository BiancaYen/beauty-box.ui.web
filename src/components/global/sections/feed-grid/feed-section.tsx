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
import { SwiperSlide } from 'swiper/swiper-react';
import classNames from 'classnames';
import { FaBarsStaggered } from 'react-icons/fa6';
import {SectionHeading1} from '@/components/global/section-heading-1';
import {SectionHeading2} from '@/components/global/section-heading-2';
import {SectionHeading3} from '@/components/global/section-heading-3';
import {SectionHeading4} from '@/components/global/section-heading-4';

interface FeedSectionProps {
    data: SubmissionItem[],
}

export const FeedSection = ({ data }: FeedSectionProps) => (
    <section className="px-5 py-7">
        <Filters
            buttonCopy={{
                default: 'Find your vibe',
                selected: 'Find your vibe',
                newSearch: 'Start a new search',
            }}
            options={[
                {
                    copy: 'Fashion',
                    id: '1',
                },
                {
                    copy: 'Makeup',
                    id: '2',
                },
                {
                    copy: 'Skincare',
                    id: '3',
                },
                {
                    copy: 'Hair',
                    id: '4',
                },
                {
                    copy: 'Shoes',
                    id: '5',
                },
                {
                    copy: 'Jewellery',
                    id: '6',
                },
                {
                    copy: 'Handbags',
                    id: '7',
                },
                {
                    copy: 'Accessories',
                    id: '8',
                },
                {
                    copy: 'Decor',
                    id: '9',
                },
                {
                    copy: 'Mood',
                    id: '10',
                },
            ]}
            onReset={() => {}}
            onSubmit={() => {}}
        />

        <div className="my-5 h-[1px] w-full bg-system-default-tint-3" />

        <div className="mb-5 flex w-full justify-between items-center">
            <SectionHeading4
                heading="Your Feed"
            />
            <div
                className={classNames(
                    'flex justify-center items-center',
                    'w-[1.875rem] h-[1.875rem] rounded-full',
                    'cursor-pointer',
                    'hover:bg-primary-tint-2',
                )}
            >
                <FaBarsStaggered />
            </div>
        </div>

        <div className="flex flex-col gap-y-3">
            <Grid className="w-full" columnsMobile={2}>
                {data.filter((item, index) => index < 4).map((item) => (
                    <FeedCard
                        key={item.id}
                        {...item}
                    />
                ))}
            </Grid>
            <Grid className="w-full" columnsMobile={1}>
                {data.filter((item, index) => index >= 4).map((item) => (
                    <FeedCard
                        key={item.id}
                        {...item}
                    />
                ))}
            </Grid>
        </div>
    </section>
);
