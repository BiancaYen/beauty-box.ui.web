import React from 'react';
import classNames from 'classnames';

// Icons
import {
    ClockIcon, PlaybookIcon, PlaylistIcon,
} from '@/components/icons';

// Components
import { IconTag } from '../tag';

// Types
interface CoachTagsProps {
    book: string,
    classes?: {
        wrapper?: string,
    },
    courseTotalTime: number,
    lessonCount: number,
}

export const CoachTags = ({
    book,
    classes = {
        wrapper: '',
    },
    courseTotalTime = 0,
    lessonCount = 0,
}: CoachTagsProps) => (
    <div
        className={classNames(
            'flex items-center w-full justify-start gap-[0.313rem]',
            classes.wrapper,
        )}
    >
        <IconTag
            classes={{
                icon: '!w-[0.563rem]',
                wrapper: 'w-[2.5rem]',
            }}
            copy={lessonCount}
            iconLeft={<PlaylistIcon />}
        />

        <IconTag
            classes={{
                icon: '!w-[0.563rem]',
                wrapper: 'w-[3.875rem]',
            }}
            copy={`${courseTotalTime} min`}
            iconLeft={<ClockIcon height="0.563rem" width="0.563rem" />}
        />

        <IconTag
            classes={{
                icon: '!w-[0.563rem]',
                wrapper: 'w-[11.25rem]',
            }}
            copy={book}
            iconLeft={<PlaybookIcon />}
        />
    </div>
);

