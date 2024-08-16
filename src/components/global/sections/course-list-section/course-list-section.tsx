import React, { FC } from 'react';

// Components
import { CourseListItemCarousel } from '@/components/global/carousels/course-list-item-carousel';
import { SectionHeading1 } from '@/components/global/section-heading-1';
import { SectionMaxWidth } from '@/components/global/sections/layouts/section-max-width';

// Types
import { LessonCardWithDescriptionProps } from '@/components/global/cards/content/lesson-card-with-description';

// Types
export interface CourseItemProps {
    action: {
        copy: string,
        link: string,
    },
    data: LessonCardWithDescriptionProps[],
    heading: string,
    id: string,
}

interface CourseListSectionProps {
    data: CourseItemProps[],
}

export const CourseListSection: FC<CourseListSectionProps> = ({ data }) => {
    const hasData = data && data.length > 0;

    return (
        <SectionMaxWidth classes="flex flex-col gap-10 py-7">
            {
                data && data.length > 0 && data.map(({
                    action: {
                        copy: actionCopy,
                        link: actionLink,
                    },
                    data: itemData,
                    heading,
                    id,
                }: CourseItemProps) => {
                    const action = {
                        copy: actionCopy,
                        link: `${actionLink}/${id}`,
                    };

                    return (
                        <div key={id}>
                            <SectionHeading1
                                {...hasData && { action }}
                                heading={heading}
                            />

                            <CourseListItemCarousel
                                action={action}
                                data={itemData}
                            />
                        </div>
                    );
                })
            }
        </SectionMaxWidth>
    );
};
