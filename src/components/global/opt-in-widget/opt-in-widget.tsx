import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

// Components
import { Rating } from '@/components/global/rating';

// Icons
import { CaretRightIcon, CircleSquiggleCheckIcon } from '@/components/icons';

// Types
interface OptInWidgetProps {
    actionCopy: string,
    actionLink: string,
    copy: string,
    heading: string,
    imageAlt: string,
    imageSrc: string,
}

export const OptInWidget: React.FC<OptInWidgetProps> = ({
    actionCopy,
    actionLink,
    copy,
    heading,
    imageAlt,
    imageSrc,
}) => {
    const isMobile = useMediaQuery('(max-width: 767px)');

    if (isMobile) {
        return (
            <article className="bg-defaultWhite shadow-optin-widget fixed bottom-0 left-1/2 z-20 flex w-full max-w-[26rem] -translate-x-1/2 flex-col rounded-t-2xl">
                <div className="flex items-center justify-center gap-2.5 px-4 py-2.5">
                    <div className="relative aspect-square flex-[0_0_5rem]">
                        <Image
                            alt={imageAlt}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                            src={imageSrc}
                        />
                    </div>

                    <div>
                        <h2 className="text-defaultBlack mb-1.5 flex items-center gap-1 text-xs font-bold">
                            {heading}
                            <CircleSquiggleCheckIcon />
                        </h2>
                        <p className="text-systemDefault-default mb-2.5 text-xxs font-normal leading-3">
                            {parse(copy)}
                        </p>
                        <Rating
                            classes={{ wrapper: 'flex-row [&>*]:font-bold' }}
                            copy={'Editor\'s Choice'}
                            stars={5}
                        />
                    </div>
                </div>
                <Link
                    className="flex w-full items-center justify-center gap-1.5 bg-primary-default p-2.5 text-xs font-bold text-default-white hover:bg-primary-shade-1"
                    href={actionLink}
                >
                    {actionCopy}
                    <CaretRightIcon fill="var(--color-defaultWhite)" />
                </Link>
            </article>
        );
    }

    return null;
};
