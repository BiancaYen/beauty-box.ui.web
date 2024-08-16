import React, { FC } from 'react';

// Components
import { FeaturedLessonCarousel } from '@/components/global/carousels/featured-lesson-carousel';

// Types
import { FeaturedLessonCardProps } from '@/components/global/cards/featured/featured-lesson-card';

interface FeaturedLessonSectionProps {
    data: Omit<FeaturedLessonCardProps, 'onClick'>[],
}

export const FeaturedLessonSection: FC<FeaturedLessonSectionProps> = ({ data }) => (
    <section>
        <FeaturedLessonCarousel
            data={data}
        />
    </section>
);

