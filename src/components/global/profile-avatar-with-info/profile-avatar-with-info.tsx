import classNames from 'classnames';
import Image from 'next/image';
import React, { FC } from 'react';

// Components
import { ConditionalLink } from '../conditional-link';

// Types
interface ProfileAvatarWithInfoProps {
    copy: string,
    heading: string,
    id?: string,
    imageAlt: string,
    imageSrc: string,
    link?: string,
}

export const ProfileAvatarWithInfo: FC<ProfileAvatarWithInfoProps> = ({
    copy,
    heading,
    id = '',
    imageAlt,
    imageSrc,
    link = '',
}) => (
    <div className="flex w-full items-center justify-start gap-2">
        <ConditionalLink href={`${link}/${id}`}>
            <div
                className={classNames(
                    'relative aspect-[1/1] h-9 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent',
                    'bg-system-default-tint-3 hover:border-default-black',
                )}
            >
                <Image
                    alt={imageAlt}
                    className="rounded-full object-cover"
                    fill
                    src={imageSrc}
                />
            </div>
        </ConditionalLink>

        <div className="overflow-hidden">
            <h3 className="truncate text-xs font-semibold">
                {heading}
            </h3>
            <p className="truncate text-xxs">
                {copy}
            </p>
        </div>
    </div>
);
