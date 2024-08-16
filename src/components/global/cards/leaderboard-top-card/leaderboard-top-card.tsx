import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import {
    FaCertificate, FaThumbsDown, FaThumbsUp,
} from 'react-icons/fa6';
import { LeaderboardItem } from '../../../../../public/beauty-breeze/data';

type LeaderboardTopCardProps = LeaderboardItem;

const badgeColor = {
    1: 'text-tertiary-default',
    2: 'text-primary-default',
    3: 'text-secondary-default',
};

const badgePosition = {
    1: {
        right: '-right-[0.7rem]',
        top: '-top-[0.7rem]',
    },
    2: {
        right: '-right-[0.8rem]',
        top: '-top-[0.8rem]',
    },
    3: {
        right: '-right-[0.9rem]',
        top: '-top-[0.9rem]',
    },
};

const badgeFontSizes = {
    1: 'text-[1.8rem]',
    2: 'text-[1.4rem]',
    3: 'text-[1.1rem]',
};

const badgeSizes = {
    1: '2.2em',
    2: '1.8em',
    3: '1.5em',
};

const order = {
    1: 'order-2',
    2: 'order-1',
    3: 'order-3',
};

const sizes = {
    1: 'w-[130%]',
    2: 'w-[80%]',
    3: 'w-[60%]',
};

export const LeaderboardTopCard = ({
    avatar,
    id,
    fullName,
    position,
    prize,
    submissionDetails,
    submissionImage,
}: LeaderboardTopCardProps) => (
    <li className={`${order[Number(position)]} flex-1 p-2`}>
        <article className="relative flex w-full flex-col items-center gap-1 transition-all hover:scale-[110%]">
            <div className="relative flex w-full flex-col items-center justify-center gap-1">
                <div
                    className={classNames(
                        'relative',
                        sizes[Number(position)],
                    )}
                >
                    <div
                        className={classNames(
                            'absolute leading-1.5 font-secondary text-2xl text-primary-tint-1 z-[2]',
                            badgePosition[Number(position)].top,
                            badgePosition[Number(position)].right,
                        )}
                        style={{
                            width: badgeSizes[Number(position)],
                            height: badgeSizes[Number(position)],
                        }}
                    >
                        <p
                            className={classNames(
                                'flex justify-center items-center w-full h-full absolute z-[2] text-system-default-default',
                                'left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2',
                                badgeFontSizes[Number(position)],
                            )}
                        >
                            {position}
                        </p>
                        <span className={classNames('absolute', badgeColor[Number(position)])}>
                            <FaCertificate size={badgeSizes[Number(position)]} />
                        </span>
                    </div>
                    <div className="relative flex aspect-square w-full overflow-hidden rounded-full shadow-card-4x transition-all hover:shadow-card-5x">
                        <Image
                            alt={fullName}
                            className="object-cover"
                            src={avatar}
                            fill
                        />
                    </div>
                </div>

                <div className="flex w-full flex-col items-center justify-center">
                    <h2 className="text-sm font-bold leading-tight">
                        {fullName}
                    </h2>

                    <div className="w-full text-center italic leading-tight">
                        <p className="text-sm">
                            200
                        </p>

                        <p
                            className={classNames(
                                'font-bold text-xs text-primary-tint-1',
                                badgeColor[Number(position)],
                            )}
                        >
                            {prize}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </li>
);
