import React from 'react';
import Image from 'next/image';

import {
    FaCertificate, FaThumbsDown, FaThumbsUp,
} from 'react-icons/fa6';
import { LeaderboardItem } from '../../../../../public/beauty-breeze/data';

type LeaderboardCardProps = LeaderboardItem;

export const LeaderboardRankCard = ({
    avatar,
    id,
    fullName,
    position,
    prize,
    submissionDetails,
    submissionImage,
}: LeaderboardCardProps) => (
    <article className="flex w-full items-center rounded-full bg-rank py-3 text-default-white shadow-md">
        <p className="leading-1.5 flex-[20%_0_0] text-center font-secondary text-2xl">
            {position}
        </p>
        <div className="flex-2 relative flex flex-[60%_0_0] flex-col gap-[0.05rem]">
            <p className="flex items-center gap-3">
                Your rank this week
            </p>
        </div>
        <div className="flex-2 relative flex flex-[20%_0_0] flex-col justify-center gap-[0.05rem] text-sm">
            200
        </div>
    </article>
);
