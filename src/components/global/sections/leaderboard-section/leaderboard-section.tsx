'use client';

import React from 'react';
import { IoIosCamera } from 'react-icons/io';

// Components
import { LeaderboardCard } from '@/components/global/cards/leaderboard-card';
import { LeaderboardRankCard } from '@/components/global/cards/leaderboard-rank-card/leaderboard-rank-card';
import { LeaderboardTopCard } from '@/components/global/cards/leaderboard-top-card';
import { SectionHeading1 } from '@/components/global/section-heading-1';

// Types
import {LeaderboardItem, RankItem} from '../../../../../public/beauty-breeze/data';

interface LeaderboardSectionProps {
    data: {
        leaderboard: LeaderboardItem[],
        rank: RankItem,
    }
}

export const LeaderboardSection = ({ data: { leaderboard, rank } }: LeaderboardSectionProps) => (
    <section>
        <SectionHeading1
            heading="Leaderboard"
        />

        <div className="px-5">
            <ul className="flex items-center gap-y-5 pb-10 pt-5">
                {leaderboard.map((item) => (
                    <LeaderboardTopCard key={item.id} {...item} />
                ))}
            </ul>

            <p className="my-5 text-sm font-thin italic [&>svg]:inline [&>svg]:pr-1">
                <IoIosCamera size="1.5rem" />
                Submit your best looking photo each week and stand a chance to win big prizes!
            </p>

            <h2 className="mb-5 flex border-b-[1px] italic text-system-default-tint-1">
                <div className="flex-[20%_0_0] text-center">
                    Rank
                </div>
                <div className="flex-[60%_0_0]">
                    User
                </div>
                <div className="flex-[20%_0_0]">
                    Points
                </div>
            </h2>

            <ul className="flex flex-col gap-y-5">
                <LeaderboardRankCard
                    {...rank}
                />
                {leaderboard.map((item) => (
                    <li key={item.id}>
                        <LeaderboardCard {...item} key={item.id} />
                    </li>
                ))}
            </ul>
        </div>
    </section>
);
