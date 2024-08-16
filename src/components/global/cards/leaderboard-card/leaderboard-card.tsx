import React from 'react';
import Image from 'next/image';

import {
    FaCertificate, FaThumbsDown, FaThumbsUp,
} from 'react-icons/fa6';
import { LeaderboardItem } from '../../../../../public/beauty-breeze/data';

type LeaderboardCardProps = LeaderboardItem;

export const LeaderboardCard = ({
    avatar,
    id,
    fullName,
    points,
    position,
    prize,
    submissionDetails,
    submissionImage,
}: LeaderboardCardProps) => (
    <article className="flex w-full items-center rounded-full bg-default-white py-3 shadow-md">
        <p className="flex-[20%_0_0] text-center font-secondary text-2xl leading-[1.5] text-system-default-tint-1">
            {position}
        </p>
        <div className="relative flex flex-[60%_0_0] flex-col gap-[0.05rem]">
            <h2 className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 overflow-hidden rounded-full">
                    <Image
                        alt={fullName}
                        className="object-cover"
                        src={avatar}
                        fill
                    />
                </div>

                <p className="flex flex-col">
                    <span className="font-medium">
                        {fullName}
                    </span>
                    <span className="text-xs font-bold italic text-primary-tint-1">
                        {prize}
                    </span>
                </p>
            </h2>
        </div>
        <div className="relative flex flex-[20%_0_0] flex-col justify-center gap-[0.05rem] text-sm text-system-default-tint-1">
            {points}
        </div>
    </article>
);
