import React, { FC } from 'react';
import Image from 'next/image';

// Icons
import { AddIcon } from '@/components/icons';

export const ExploreCoachesCard: FC = () => (
    <div className="bg-defaultBlack relative mt-[1.375rem] flex h-[15.625rem] w-[11.25rem] cursor-pointer items-center justify-center rounded-t-2xl hover:opacity-90">
        <div className="absolute left-0 top-[-1.375rem] h-[calc(100%+1.375rem)] w-full">
            <div className="relative h-full w-full">
                <Image
                    alt="explore coaches"
                    className="top-0"
                    layout="fill"
                    src="/images/placeholders/explore-coaches.png"
                />

                <span
                    className="absolute bottom-0 left-0 z-10 h-[55%] w-full bg-[linear-gradient(_to_bottom,_rgba(0,_0,_0,_0),_#000000)]"
                />
            </div>
        </div>

        <div className="z-10 flex flex-col items-center justify-center gap-2 text-xxs">
            <AddIcon
                fill="var(--color-defaultWhite)"
            />
            <p className="text-defaultWhite font-bold">Explore Coaches</p>
        </div>
    </div>
);
