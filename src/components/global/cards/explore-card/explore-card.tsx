import React from 'react';

// Components
import { Card } from '../card';
import Link from 'next/link';

interface FeedCardProps {
    className?: string,
    heading: string,
    image: string,
}

export const ExploreCard = ({
                             contentHeading,
    heading,
                             presenter,
                             presenterImageSrc,
                             ...rest
                         }: FeedCardProps) => (
    <Card {...rest}>
        <Link href="/leaderboard">
            <h2 className="absolute text-2xl w-max text-center uppercase font-secondary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            transition-all bg-primary-default-opacity-50">
            <span className="text-default-white bg-linear-primary-primary-tint bg-[length:100%_0] bg-[0_100%] bg-no-repeat pointer-events-none
            group-hover:bg-[length:100%_100%] group-hover:bg-[0_100%] transition-all [text-shadow:_0_1px_0_var(--color-system-default)]">
                {heading}
            </span>
            </h2>
        </Link>
    </Card>
);
