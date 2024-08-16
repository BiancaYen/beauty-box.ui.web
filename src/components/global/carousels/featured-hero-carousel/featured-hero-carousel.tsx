import React, { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

// Components
import { Carousel } from '@/components/global/carousel';
import { FeaturedHeroCard, FeaturedHeroCardProps } from '@/components/global/cards/featured/featured-hero-card';

// Types
interface FeaturedHeroCarouselProps {
    data: FeaturedHeroCardProps[],
}

export const FeaturedHeroCarousel: FC<FeaturedHeroCarouselProps> = ({ data }) => (
    <Carousel
        classes={{
            wrapper: '!h-[26rem] w-full !lg:h-[23.875rem]',
        }}
        hasPaginationMobile
    >
        {data.map(({
            backgroundImage,
            backgroundImageDesktop,
            book,
            foregroundImage,
            foregroundImageDesktop,
            courseName,
            courseTotalTime,
            id,
            isBookmarkActive,
            lessonCount,
            link,
            linkCopy,
            name,
            nameColor,
            subheading,
        }) => (
            <SwiperSlide
                key={id}
            >
                <FeaturedHeroCard
                    backgroundImage={backgroundImage}
                    backgroundImageDesktop={backgroundImageDesktop}
                    book={book}
                    foregroundImage={foregroundImage}
                    foregroundImageDesktop={foregroundImageDesktop}
                    courseName={courseName}
                    courseTotalTime={courseTotalTime}
                    id={id}
                    isBookmarkActive={isBookmarkActive}
                    link={link}
                    linkCopy={linkCopy}
                    lessonCount={lessonCount}
                    name={name}
                    nameColor={nameColor}
                    subheading={subheading}
                />
            </SwiperSlide>
        ))}
    </Carousel>
);
