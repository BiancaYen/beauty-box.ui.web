
import { SwiperSlide } from 'swiper/react';
import React, { FC } from 'react';

// Components
import { Carousel } from '@/components/global/carousel';
import { ComingSoonCard, ComingSoonCardProps } from '@/components/global/cards/coming-soon';

// Types
export interface ComingSoonSlideProps extends ComingSoonCardProps {
    id: string,
}

interface ComingSoonCarouselProps {
    classes?: {
        wrapper?: string,
    },
    data: ComingSoonSlideProps[],
}

export const ComingSoonCarousel: FC<ComingSoonCarouselProps> = ({
    classes = {
        wrapper: '',
    },
    data,
}) => (
    <Carousel
        classes={{
            wrapper: classes.wrapper,
        }}
        hasFreeScroll
    >
        {data.map(({
            backgroundImage,
            category,
            categoryColor,
            coach,
            id,
            isLoading,
        }) => (
            <SwiperSlide
                className="!mx-2 mr-4 h-10 !w-fit lg:mr-12"
                key={id}
            >
                <ComingSoonCard
                    backgroundImage={backgroundImage}
                    category={category}
                    categoryColor={categoryColor}
                    coach={coach}
                    isLoading={isLoading}
                />
            </SwiperSlide>
        ))}
    </Carousel>
);
