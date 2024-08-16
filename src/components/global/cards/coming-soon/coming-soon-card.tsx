import Image from 'next/image';
import React, { ElementType, FC } from 'react';

// Components
import { ComingSoonCardSkeletonLoader } from './coming-soon-card-skeleton-loader';

// Types
export interface ComingSoonCardProps {
    backgroundImage: {
        alt: string,
        src: string,
    },
    category: string,
    categoryColor: string,
    coach: string,
    fallbackImageSrc?: string,
    headingTag?: ElementType,
    isLoading: boolean,
}

export const ComingSoonCard: FC<ComingSoonCardProps> = ({
    backgroundImage,
    category,
    categoryColor,
    coach,
    fallbackImageSrc = '/images/placeholders/coming-soon-placeholder.jpg',
    headingTag: HeadingTag = 'h2',
    isLoading,
}) => {
    if (isLoading) return <ComingSoonCardSkeletonLoader />;

    const {
        alt: backgroundImageAlt,
        src: backgroundImageSrc,
    } = backgroundImage;

    return (
        <article
            className="bg-defaultWhite relative h-[249px] w-[158px] items-stretch justify-start rounded-2xl p-1 pb-3 text-center [&>img]:rounded-2xl"
            style={{
                boxShadow: `-10px 10px 11px 0 rgba(130, 147, 182, 0.2), inset 0 -4px 0 0 ${categoryColor}`,
            }}
        >
            <Image
                alt={backgroundImageAlt}
                className="bg-systemDefault-tint-2 mb-1 h-[190px] w-[158px] object-contain"
                height="0"
                placeholder="empty"
                src={backgroundImageSrc}
                width="0"
                // eslint-disable-next-line no-return-assign
                onError={(e) => (e.currentTarget.src = fallbackImageSrc)}
            />
            <HeadingTag
                className="mb-1 truncate text-xs font-bold leading-relaxed"
                style={{ color: categoryColor }}
            >
                {category}
            </HeadingTag>
            <p className="truncate text-xxs font-semibold leading-snug">
                {coach}
            </p>
        </article>
    );
};
