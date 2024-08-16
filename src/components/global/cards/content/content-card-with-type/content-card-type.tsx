import React, {
    FC,
    ReactNode,
    useMemo,
} from 'react';
import { twMerge } from 'tailwind-merge';

// Components
import { ContentCard, ContentCardProps } from '@/components/global/cards/content/content-card';

// Icons
import {
    CheckSmallIcon,
    PlaybookIcon,
    PlayIcon,
} from '@/components/icons';

// Types
export interface ContentCardWithTypeProps extends Omit<ContentCardProps, 'classes' | 'hasHover' | 'tags'> {
    category?: string,
    children: ReactNode,
    classes?: {
        wrapper: string,
        contentCard: string,
    },
    lessonCount?: null | number,
    lessonTotalTime?: string,
    type: 'course' | 'lesson',
}

export const ContentCardWithType: FC<ContentCardWithTypeProps> = ({
    backgroundImage,
    category,
    children,
    classes = {
        wrapper: '',
        contentCard: '',
    },
    id,
    isBookmarkActive,
    isCompleted,
    lessonCount = null,
    lessonTotalTime = '',
    link,
    progress,
    type,
}) => {
    // Memoized
    const rightTagCopy = useMemo(() => {
        if (type === 'course' && lessonCount) {
            return lessonCount;
        }
        if (type === 'lesson' && lessonTotalTime) {
            return lessonTotalTime;
        }
        return '';
    }, [lessonCount, lessonTotalTime, type]);

    const rightTagLeftIcon = useMemo(() => {
        if (type === 'course') {
            return <PlaybookIcon />;
        }
        if (type === 'lesson') {
            return <PlayIcon />;
        }
        return '';
    }, [type]);

    return (
        <div className={twMerge('flex w-[15.625rem] flex-col gap-1', classes.wrapper)}>
            <ContentCard
                backgroundImage={backgroundImage}
                classes={{
                    bookmarkWrapper: twMerge('aspect-[5/3] w-[15.625rem]', classes.contentCard),
                }}
                hasHover
                id={id}
                isBookmarkActive={isBookmarkActive}
                isCompleted={isCompleted}
                link={link}
                progress={progress}
                tags={{
                    left: {
                        copy: category,
                    },
                    right: {
                        copy: rightTagCopy,
                        iconLeft: rightTagLeftIcon,
                        ...isCompleted && { iconRight: <CheckSmallIcon /> },
                    },
                }}
            />
            {children}
        </div>
    );
};
