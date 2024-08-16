import classNames from 'classnames';
import Image from 'next/image';
import React, { FC } from 'react';
import parse from 'html-react-parser';
import { useMediaQuery } from 'usehooks-ts';

// Components
import { Button, ButtonVariant } from '@/components/global/button';

// Types
type HttpStatusCode = 404 | 500;

export interface ErrorCardProps {
    backgroundImageSrc: string,
    buttonCopy: string,
    copy: string,
    foregroundImageSrc?: string,
    heading?: string,
    headingTag?: 'h1' | 'h2',
    variant?: HttpStatusCode,
    onClick: () => void,
}

export const ErrorCard: FC<ErrorCardProps> = ({
    backgroundImageSrc,
    buttonCopy,
    copy,
    foregroundImageSrc,
    heading,
    headingTag: HeadingTag = 'h1',
    variant,
    onClick,
}) => {
    const variantImageSrc = foregroundImageSrc || variant ? `/images/errors/error-${variant}.png` : undefined;

    const isMobile = useMediaQuery('(max-width: 767px)');

    if (isMobile) {
        return (
            <article className="flex w-full flex-col items-center justify-start space-y-5">
                <HeadingTag className="w-full font-bold">{heading}</HeadingTag>
                <p className="w-full text-xxs">{parse(copy)}</p>
                <Button
                    classes={{ wrapper: 'w-full m-2' }}
                    variant={ButtonVariant.tertiary}
                    onClick={onClick}
                >
                    {buttonCopy}
                </Button>
            </article>
        );
    }

    return (
        <article className="relative flex w-full max-w-[47rem] flex-col items-center justify-start space-y-6 overflow-hidden rounded-2xl p-12 lg:shadow-[-16px_16px_16px_0_rgba(0,0,0,0.1)]">
            <Image
                alt={`${variant || ''} Error background`}
                className=""
                fill
                objectFit="fill"
                src={backgroundImageSrc}
            />

            {variantImageSrc && (
                <div
                    className={classNames(
                        'relative h-36 w-full shrink',
                    )}
                >
                    <Image
                        alt={`${variant || ''} Error symbol`}
                        className="aspect-video h-auto w-full"
                        fill
                        objectFit="contain"
                        src={variantImageSrc}
                    />
                </div>
            )}

            {copy && copy.length > 0
                && (
                    <div className="z-[1] flex flex-col text-center text-xxs text-default-white">{parse(copy)}</div>
                )}
            <Button
                classes={{ wrapper: 'max-w-[16rem]' }}
                variant={ButtonVariant.primary}
                onClick={onClick}
            >
                {buttonCopy}
            </Button>
        </article>
    );
};

