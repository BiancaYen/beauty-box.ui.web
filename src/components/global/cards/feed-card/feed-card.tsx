import React from 'react';
import Image from 'next/image';

import { ProfileAvatarWithInfo } from '@/components/global/profile-avatar-with-info';
import { Card } from '../card';

interface FeedCardProps {
    className?: string,
    heading: string,
    image: string,
}

export const FeedCard = ({
    category,
    contentHeading,
    presenter,
    presenterImage,
    ...rest
}: FeedCardProps) => (
    <article className="flex w-full flex-col gap-1 flex-shrink">
        <Card {...rest} tagCopy={category} />
        <ProfileAvatarWithInfo
            heading={presenter}
            copy={contentHeading}
            imageSrc={presenterImage?.src || ''}
        />
    </article>
);
