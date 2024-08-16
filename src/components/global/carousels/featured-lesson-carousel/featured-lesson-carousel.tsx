import React, { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

// Components
import { Carousel } from '@/components/global/carousel';
import { FeaturedLessonCard, FeaturedLessonCardProps } from '@/components/global/cards/featured/featured-lesson-card';

// Types
interface FeaturedLessonCarouselProps {
    data: Omit<FeaturedLessonCardProps, 'onClick'>[],
}

export const FeaturedLessonCarousel: FC<FeaturedLessonCarouselProps> = ({ data }) => {
    const handleClick = (id:string) => {
        // TODO: Update action here
        const action = `${id}`;
        return action;
    };

    return (
        <Carousel
            classes={{
                wrapper: '!h-[34.5rem] h-full w-full lg:!h-[24.375rem]',
            }}
            hasPaginationMobile
        >
            {data.map(
                ({
                    backgroundImageDesktopSrc,
                    backgroundImageSrc,
                    buttonCopy,
                    coachImageSrc,
                    coachImageDesktopSrc,
                    copy,
                    course,
                    id,
                    isBookmarkActive,
                    name,
                }) => (
                    <SwiperSlide key={id}>
                        <FeaturedLessonCard
                            backgroundImageDesktopSrc={backgroundImageDesktopSrc}
                            backgroundImageSrc={backgroundImageSrc}
                            buttonCopy={buttonCopy}
                            coachImageSrc={coachImageSrc}
                            coachImageDesktopSrc={coachImageDesktopSrc}
                            copy={copy}
                            course={course}
                            id={id}
                            isBookmarkActive={isBookmarkActive}
                            name={name}
                            onClick={() => handleClick(id)}
                        />
                    </SwiperSlide>
                ),
            )}
        </Carousel>
    );
};
