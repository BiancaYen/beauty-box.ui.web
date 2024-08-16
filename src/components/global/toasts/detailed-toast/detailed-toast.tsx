
import { twMerge } from 'tailwind-merge';
import { useMediaQuery } from 'usehooks-ts';
import Image from 'next/image';
import React, { ElementType, ReactNode } from 'react';

// Components
import { Rating } from '@/components/global/rating';

// Images
import { MasterStreamLogo } from '../../../../../public/images/logo';

// Types
type IconType = {
    fill?: string,
    height?: string,
    width?: string,
};

interface DetailedToastProps {
    actionCopy: string,
    actionIcon?: ElementType<IconType>,
    copy?: ReactNode,
    hasRating: boolean,
    heading: ReactNode,
    onActionClick: () => void,
}

export const DetailedToast: React.FC<DetailedToastProps> = ({
    actionCopy,
    actionIcon: ActionIcon,
    copy,
    hasRating,
    heading,
    onActionClick,
}) => {
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <div className="bg-defaultWhite flex overflow-hidden rounded-2xl xs:w-[19.375rem] md:h-fit md:w-[26.375rem]">
            <Image
                className="m-auto w-[4.375rem] py-[0.3125rem] pl-2.5 md:w-[5.9375rem] md:py-2.5 md:pl-[0.9375rem]"
                src={MasterStreamLogo}
                alt="Main Logo"
            />
            <div className="flex w-[calc(100%-8.75rem)] flex-col px-2.5 py-3 md:w-[calc(100%-12.1875rem)] md:px-3 md:py-[0.9375rem]">
                <h2 className="mb-0 text-xs font-bold md:mb-[0.3rem]">{heading}</h2>
                {copy && <p className={twMerge('text-xxs md:block', hasRating && 'mb-[0.65rem]')}>{copy}</p>}
                {hasRating && (
                    <Rating
                        copy={'Editor\'s Choice'}
                        stars={5}
                    />
                )}
            </div>
            <button
                className="flex w-[4.375rem] cursor-pointer flex-col items-center justify-center bg-primary-default hover:bg-primary-shade-1 md:w-[6.25rem]"
                type="button"
                onClick={onActionClick}
            >
                {!!ActionIcon && (
                    <div className="mb-2.5">
                        <ActionIcon
                            fill="#FFFFFF"
                            height={isMobile ? '1.27rem' : '1.8125rem'}
                            width={isMobile ? '1.27rem' : '1.8125rem'}
                        />
                    </div>
                )}
                <div className="text-xs font-bold text-default-white md:text-base">{actionCopy}</div>
            </button>
        </div>
    );
};
