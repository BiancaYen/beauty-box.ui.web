import React, { FC } from 'react';

// Components
import { ContentCardWithType, ContentCardWithTypeProps } from '@/components/global/cards/content/content-card-with-type';

// Types
export type LessonCardWithDescriptionProps = Omit<ContentCardWithTypeProps, 'children'> & {
    lessonDescription: string,
    lessonName: string,
    lessonTotalTime: string,
};

export const LessonCardWithDescription: FC<LessonCardWithDescriptionProps> = ({
    backgroundImage,
    id,
    isBookmarkActive,
    isCompleted = false,
    lessonDescription,
    lessonName,
    lessonTotalTime,
    link,
    progress = null,
    type,
}) => (
    <ContentCardWithType
        backgroundImage={backgroundImage}
        id={id}
        isBookmarkActive={isBookmarkActive}
        isCompleted={isCompleted}
        lessonTotalTime={lessonTotalTime}
        link={link}
        progress={progress}
        type={type}
    >
        <div className="w-full p-[2px]">
            <h3 className="text-xxs font-semibold">
                {lessonName}
            </h3>
            <p className="line-clamp-3 text-xxs">
                {lessonDescription}
            </p>
        </div>
    </ContentCardWithType>
);
