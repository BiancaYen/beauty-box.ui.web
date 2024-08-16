'use client';

import React from 'react';

// Types
import { WishlistItem } from '../../../../../public/beauty-breeze/data';

import { ExploreCard } from '@/components/global/cards/explore-card';
import { SectionHeading1 } from '@/components/global/section-heading-1';
import { SwiperSlide } from 'swiper/react';
import { WishListCard } from '@/components/global/cards/wish-list-card';
import { Carousel } from '@/components/global/carousel';

interface WishListSectionProps {
    data: WishlistItem[],
}

export const WishListSection = ({ data }: WishListSectionProps) => (
    <section>
        <SectionHeading1
            action={{
                copy: 'View More',
                href: '/looks',
            }}
            additionalInfo="06"
            heading="My Wishlist"
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
                    <WishListCard {...item} key={item.id} />
                </SwiperSlide>
            ))}
        </Carousel>
    </section>
);
