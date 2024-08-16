import React, { FC, useMemo } from 'react';

// Components
import { ContentCardWithType, ContentCardWithTypeProps } from '@/components/global/cards/content/content-card-with-type';
import { ProfileAvatarWithInfo } from '@/components/global/profile-avatar-with-info';

// Types
export interface ContentCardWithProfileAvatarProps extends Omit<ContentCardWithTypeProps, 'children'> {
    coach: string,
    coachId: string,
    coachImage: {
        alt: string,
        src: string,
    },
    coachLink: string,
    courseName?: string,
    lessonName?: string,
}

export const ContentCardWithProfileAvatar: FC<ContentCardWithProfileAvatarProps> = ({
    backgroundImage,
    category,
    classes,
    coach,
    coachId,
    coachImage,
    coachLink,
    courseName = '',
    id,
    isBookmarkActive,
    isCompleted = false,
    lessonCount,
    lessonName = '',
    lessonTotalTime,
    link,
    progress,
    type,
}) => {
    const {
        alt: coachImageAlt,
        src: coachImageSrc,
    } = coachImage;

    // Memoized
    const profileCopy = useMemo(() => {
        if (type === 'course' && courseName) {
            return courseName;
        }
        if (type === 'lesson' && lessonName) {
            return lessonName;
        }
        return '';
    }, [courseName, lessonName, type]);

    return (
        <ContentCardWithType
            backgroundImage={backgroundImage}
            category={category}
            classes={classes}
            id={id}
            isBookmarkActive={isBookmarkActive}
            isCompleted={isCompleted}
            lessonCount={lessonCount}
            lessonTotalTime={lessonTotalTime}
            link={link}
            progress={progress}
            type={type}
        >
            <ProfileAvatarWithInfo
                copy={profileCopy}
                heading={coach}
                id={coachId}
                imageAlt={coachImageAlt}
                imageSrc={coachImageSrc}
                link={coachLink}
            />
        </ContentCardWithType>
    );
};
