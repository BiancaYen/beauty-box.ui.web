'use client';

import classNames from 'classnames';
import React, { FC, useState } from 'react';
import Image from 'next/image';

import {
    MdEdit, MdTableView, MdSwitchAccessShortcut,
} from 'react-icons/md';

// Components
import { Rank } from '@/components/global/rank';

// Images
import { EnglishPremierLeague } from '../../../../../public/images/leagues';

interface FooterPopupProps {
    isActive: string,
}

export const FooterPopup: FC<FooterPopupProps> = ({ isActive }) => {
    const [isLeagueToggleActive, setIsLeagueToggleActive] = useState(false);

    console.log(isLeagueToggleActive);

    const handleClick = () => {
        console.log('gests here');
        setIsLeagueToggleActive(true);
    };

    return (
        <div>
            <div
                className={classNames(
                    'fixed -translate-x-1/2 left-1/2 w-[120%] aspect-square transition-all duration-300',
                    'shadow-footer-popup rounded-full',
                    isActive ? '-bottom-[8rem] scale-100' : '-bottom-[70%] scale-75',
                    isActive && isLeagueToggleActive ? 'aspect-auto scale-[400%] bg-default-white' : 'bg-tertiary-default',
                )}
            >
                <div className={classNames(isActive && isLeagueToggleActive && 'scale-[25%]')}>
                    { !isLeagueToggleActive && (
                        <>
                            <div className="absolute left-1/2 top-[0.5rem] z-[1000] flex w-[calc(100%-20%)] -translate-x-1/2 justify-center">
                                <button
                                    className="flex flex-col items-center justify-center gap-2"
                                    type="button"
                                    onClick={handleClick}
                                >
                                    <div
                                        className="flex aspect-square w-[2rem] rotate-180 items-center justify-center rounded-full p-1 text-default-white shadow-inner"
                                    >
                                        <MdSwitchAccessShortcut size="1.5rem" />
                                    </div>
                                    {/* <span className="text-xs uppercase text-default-white opacity-20"> */}
                                    {/*    Toggle League */}
                                    {/* </span> */}
                                </button>
                            </div>
                            <div
                                className={classNames(
                                    'relative aspect-square opacity-20 p-8',
                                    isLeagueToggleActive ? 'w-[30%] py-0 top-0 left-0' : 'w-[60%]',
                                )}
                            >
                                <div className="relative h-full w-full">
                                    <Image
                                        alt="Premier League"
                                        src={EnglishPremierLeague}
                                        fill
                                    />
                                </div>
                            </div>
                            <Rank />
                            <div className="absolute left-1/2 top-1/2 h-[60%] w-[calc(100%-20%)] -translate-x-1/2 -translate-y-1/2">
                                <ul className="flex w-[90%] flex-col items-end gap-2 px-2">
                                    <li className="flex animate-bounce items-center gap-1.5 text-lg tracking-wide text-default-white">
                                        Edit Team
                                        <MdEdit />
                                    </li>
                                    <li className="flex items-center gap-1.5 text-lg tracking-wide text-default-white">
                                        My Points
                                        <MdTableView />
                                    </li>
                                    <li className="flex items-center gap-1.5 text-lg tracking-wide text-default-white">
                                        Highest |
                                        {' '}
                                        <span className="text-sm">4000</span>

                                        <MdTableView />
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) }

                </div>
            </div>
            {
                isLeagueToggleActive && (
                    <div className="absolute left-1/2 top-0 w-full -translate-x-1/2 p-5">
                        <h1 className="mb-5">
                            You're currently on the
                            {' '}
                            <em className="underline">Premier League</em>
                        </h1>
                        <ul>
                            <li className="flex w-full animate-enter items-center justify-center gap-5 rounded-full bg-tertiary-default px-5 py-3 text-default-white shadow-xl">
                                <div className="flex w-full flex-1 items-center gap-3">
                                    <div
                                        className={classNames(
                                            'relative aspect-square w-[2rem] text-default-white opacity-50',
                                        )}
                                    >
                                        <div className="relative h-full w-full">
                                            <Image
                                                alt="Premier League"
                                                src={EnglishPremierLeague}
                                                fill
                                            />
                                        </div>
                                    </div>
                                    Premier League
                                </div>

                                <div className="">
                                    <span className="text-xs">GW1 | </span>
                                    <span className="animate-fade-in text-xs">200 pts</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                )
            }
        </div>
    );
};
