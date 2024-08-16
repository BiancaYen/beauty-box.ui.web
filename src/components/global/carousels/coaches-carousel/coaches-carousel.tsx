import React, { FC } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { SwiperSlide } from 'swiper/react';

// Components
import { AddMoreCard } from '@/components/global/cards/placeholder/add-more-card';
import { Carousel } from '@/components/global/carousel';
import { CoachCard } from '@/components/global/cards/coach/coach-card';

// Types
import type { CoachCardPropsExtended } from '@/components/global/sections/other-coaches-section';

interface CoachesCarouselProps {
    classes?: {
        wrapper?: string,
    },
    data: CoachCardPropsExtended[],
}

export const CoachesCarousel: FC<CoachesCarouselProps> = ({
    classes = {
        wrapper: '',
    },
    data,
}) => {
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <Carousel
            classes={{
                wrapper: classes.wrapper,
            }}
            hasFreeScroll
        >
            {data.map(({
                backgroundImage,
                backgroundImageHover,
                book,
                categoryColor,
                courseTotalTime,
                id,
                isBookmarkActive,
                coach,
                lessonCount,
                link,
                redirectCopy,
                subcategory,
            }) => (
                <SwiperSlide
                    className="mr-4 h-10 !w-fit lg:mr-12"
                    key={id}
                >
                    <CoachCard
                        backgroundImage={backgroundImage}
                        backgroundImageHover={backgroundImageHover}
                        book={book}
                        categoryColor={categoryColor}
                        courseTotalTime={courseTotalTime}
                        id={id}
                        link={link}
                        isBookmarkActive={isBookmarkActive}
                        coach={coach}
                        lessonCount={lessonCount}
                        redirectCopy={redirectCopy}
                        subcategory={subcategory}
                    />
                </SwiperSlide>
            ))}
            {!isMobile && (
                <SwiperSlide
                    className="mr-1 h-10 !w-fit"
                >
                    <AddMoreCard
                        href="/coaches"
                    />
                </SwiperSlide>
            )}
        </Carousel>
    );
};
