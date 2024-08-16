import React, { FC } from 'react';

interface RankProps {
}

export const Rank: FC<RankProps> = () => (
    <div className="absolute bottom-[12rem] left-[calc(15%)] w-[calc(100%-20%)]">
        <p className="flex flex-1 justify-between rounded-full bg-rank p-2 text-lg uppercase text-default-white shadow-footer-popup">
            <span className="">
                #2
            </span>
            <span className="text-md px-5 opacity-50">
                3000 pts
            </span>
        </p>
    </div>
);
