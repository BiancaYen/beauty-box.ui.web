import Image from 'next/image';
import React, { FC } from 'react';

// Components
import { ProfileAvatarEpisodePlaceholder } from '@/components/global/profile-avatar-placeholder';

// Types
interface SectionPlaceholderProps {
    hasProfilePlaceholder?: boolean,
    imageAlt: string,
    imageSrc: string,
}

export const SectionPlaceholder: FC<SectionPlaceholderProps> = ({
    hasProfilePlaceholder = true,
    imageAlt,
    imageSrc,
}) => (
    <div className="flex flex-col items-start justify-center gap-2">
        <Image
            alt={imageAlt}
            className="rounded-[15px] object-contain shadow-[-10px_10px_12px_0_rgba(130,147,182,0.2)]"
            height={140}
            width={250}
            src={imageSrc}
        />

        {hasProfilePlaceholder && <ProfileAvatarEpisodePlaceholder />}
    </div>
);
