import React, { ElementType, FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'usehooks-ts';

// Components
import { AddMoreCard } from '@/components/global/cards/placeholder/add-more-card';
import { Carousel } from '@/components/global/carousel';

// Types
import { ContentCardWithProfileAvatarProps } from '@/components/global/cards/content/content-card-with-profile-avatar';
import { LessonCardWithDescriptionProps } from '@/components/global/cards/content/lesson-card-with-description';

// Types
export interface ContentCarouselProps {
    action?: {
        copy: string,
        link: string,
    },
    data: ContentCardWithProfileAvatarProps[] | LessonCardWithDescriptionProps[],
    hasMoreCard?: boolean,
    slideComponent: ElementType,
}

export const ContentCarousel: FC<ContentCarouselProps> = ({
    action = {},
    data,
    hasMoreCard = false,
    slideComponent: SlideComponent,
}) => {
    // Derived Data
    const {
        copy: actionLabel,
        link: actionLink = '',
    } = action;

    // Effects
    const isMobile = useMediaQuery('(max-width: 1023px)');

    return (
        <div className="pt-2">
            <Carousel
                classes={{
                    wrapper: '!overflow-x-visible',
                }}
                hasFreeScroll
                hasNavigationArrows={false}
            >
                {data.map((item: ContentCardWithProfileAvatarProps | LessonCardWithDescriptionProps) => (
                    <SwiperSlide
                        className="mr-1.5 !w-fit"
                        key={item.id}
                    >
                        <SlideComponent
                            {...item}
                        />
                    </SwiperSlide>
                ))}
                {!isMobile && hasMoreCard && (
                    <SwiperSlide
                        className="mr-1 h-10 !w-fit"
                    >
                        <AddMoreCard
                            copy={actionLabel}
                            href={actionLink}
                            variant="content"
                        />
                    </SwiperSlide>
                )}
            </Carousel>
        </div>
    );
};
