import React, { FC } from 'react';

// Components
import { ProfileAvatarWithInfo } from '@/components/global/profile-avatar-with-info';

export const ProfileAvatarEpisodePlaceholder: FC = () => (
    <ProfileAvatarWithInfo
        copy="Episode"
        heading="Your Coach"
        imageAlt="A generic profile image in the shape of a man"
        imageSrc="/images/placeholders/profile-placeholder.jpg"
    />
);
