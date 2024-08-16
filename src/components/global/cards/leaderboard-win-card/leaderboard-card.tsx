import React from 'react';
import Image from 'next/image';

import {
    FaCertificate, FaThumbsDown, FaThumbsUp,
} from 'react-icons/fa6';

interface LeaderboardCardProps {
    avatar: string,
    id: number,
    fullName: string,
    position: string,
    submissionDetails: string,
    submissionImage: string,
}

export const LeaderboardCard = ({
    avatar,
    id,
    fullName,
    position,
    submissionDetails,
    submissionImage,
}: LeaderboardCardProps) => (
    <article className="flex w-full items-center gap-2">
        <span className="leading-1.5 font-secondary text-2xl text-primary-tint-1">
            {position}
        </span>
        <div className="relative aspect-square flex-[4rem_0_0] overflow-hidden rounded-xl">
            <Image
                alt={fullName}
                className="object-cover"
                src={submissionImage}
                fill
            />
        </div>
        <div className="flex-2 relative flex flex-col justify-center gap-[0.05rem]">
            <h2 className="flex gap-1">
                <div className="relative flex h-5 w-5 overflow-hidden rounded-full">
                    <Image
                        alt={fullName}
                        className="object-cover"
                        src={avatar}
                        fill
                    />
                </div>

                <span className="font-bold">
                    {fullName}
                </span>
            </h2>
            <p className="font-italic text-xs">
                {submissionDetails}
            </p>
            <p>
                R2000
            </p>
        </div>
    </article>
);
