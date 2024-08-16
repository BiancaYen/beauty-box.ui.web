import React, { FC } from 'react';

// Components
import { ContentCarousel } from '@/components/global/carousels/content-carousel';
import { LessonCardWithDescription, LessonCardWithDescriptionProps } from '@/components/global/cards/content/lesson-card-with-description';

// Types
export interface CourseListItemCarouselProps {
    action: {
        copy: string,
        link: string,
    },
    data: LessonCardWithDescriptionProps[],
}

export const CourseListItemCarousel: FC<CourseListItemCarouselProps> = ({
    action,
    data,
}) => (
    <ContentCarousel
        action={action}
        data={data}
        hasMoreCard
        slideComponent={LessonCardWithDescription}
    />
);
