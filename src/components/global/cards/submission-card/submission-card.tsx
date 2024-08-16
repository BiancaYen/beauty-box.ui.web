import React from 'react';
import Image from 'next/image';

import {
    FaCertificate, FaThumbsDown, FaThumbsUp,
} from 'react-icons/fa6';

export interface SubmissionItem {
    id: number,
    heading: string,
    image: string,
    isOwn: boolean,
    submissionDetails: string,
    vote: 'downvoted' | 'upvoted',
}

interface SubmissionCardProps extends SubmissionItem {
    className?: string,
}

export const SubmissionCard = ({
    className = '',
    heading,
    image,
    isOwn,
    submissionDetails,
    vote = 'upvoted',
}: SubmissionCardProps) => (
    <article
        className="bg-clip-border-box flex-basis-150 group relative flex aspect-[2/3] w-full shrink-0 grow-0
     flex-col justify-between overflow-hidden rounded-3xl p-4 text-default-white shadow-card-1x transition-all duration-200
     ease-linear hover:scale-[110%] hover:shadow-card-2x"
    >
        <h2
            className="absolute left-1/2 top-1/2 z-[3] m-0 -translate-x-1/2 -translate-y-1/2 font-secondary text-xl
        font-normal leading-normal opacity-70 transition-all duration-200 ease-linear group-hover:top-[40%]"
        >
            {heading}
        </h2>
        <div
            className="[&_svg:filter] [&_svg:drop-shadow-md] absolute left-1/2 z-[2] flex h-full w-full -translate-x-1/2 items-start gap-2 px-3 py-1"
        >
            {
                isOwn ? (
                    <div className="text-primary-default">
                        <FaCertificate />
                    </div>
                ) : ''
            }
            <div className="ml-auto">
                {
                    vote === 'upvoted' ? (
                        <FaThumbsUp />
                    ) : (
                        <FaThumbsDown />
                    )
                }
            </div>
        </div>
        <div className="z-1 absolute inset-y-0 left-1/2 w-full -translate-x-1/2">
            <Image
                alt={heading}
                src={image}
                fill
            />
        </div>
        <div
            className="absolute bottom-0 left-1/2 z-[3] hidden min-h-[20%] w-full -translate-x-1/2 flex-col
         items-center justify-center rounded-b-3xl bg-primary-default-opacity-50 p-4 group-hover:flex"
        >
            <h3 className="text-shadow-none text-xs font-light tracking-wide">
                {submissionDetails}
            </h3>
        </div>
    </article>
);
