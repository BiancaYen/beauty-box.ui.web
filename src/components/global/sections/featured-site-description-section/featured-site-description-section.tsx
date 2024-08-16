import React, { FC } from 'react';
import Image from 'next/image';

// Utils
import classNames from 'classnames';
import parse from 'html-react-parser';
import { useMediaQuery } from 'usehooks-ts';

// Components
import { ButtonLink } from '@/components/global/button-link';
import { ButtonVariant } from '@/components/global/button';

// Types
interface FeaturedSiteDescriptionSectionProps {
    backgroundImage: {
        alt: string,
        src: string,
    },
    backgroundImageDesktop: {
        alt: string,
        src: string,
    },
    classes?: {
        article?: string,
        button?: string,
        buttonWrapper?: string,
        description?: string,
        heading?: string,
        image?: string,
        note?: string,
        section?: string,
    },
    description: string,
    foregroundImage: {
        alt: string,
        src: string,
    },
    heading: string,
    headingTag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    link: string,
    linkCopy: string,
    note: string,
}

export const FeaturedSiteDescriptionSection: FC<FeaturedSiteDescriptionSectionProps> = ({
    backgroundImage,
    backgroundImageDesktop,
    classes,
    description,
    foregroundImage,
    heading,
    headingTag: HeadingTag = 'h2',
    link,
    linkCopy,
    note,
}) => {
    const {
        alt: backgroundImageAlt,
        src: backgroundImageSrc,
    } = backgroundImage;

    const {
        alt: backgroundImageDesktopAlt,
        src: backgroundImageDesktopSrc,
    } = backgroundImageDesktop;

    const {
        alt: foregroundImageAlt,
        src: foregroundImageSrc,
    } = foregroundImage;

    const isMobileXs = useMediaQuery('(max-width: 414px)');
    const isMobile = useMediaQuery('(max-width: 1023px)');

    return (
        <section className={classNames('overflow-hidden relative flex flex-col justify-center bg-system-default-tint-2 pt-5 text-center lg:px-[90px] lg:py-[50px]', classes?.section)}>
            <Image
                alt={isMobile ? backgroundImageAlt : backgroundImageDesktopAlt}
                className={classNames('h-auto w-full object-cover', classes?.image)}
                fill
                src={isMobile ? backgroundImageSrc : backgroundImageDesktopSrc}
            />
            <article
                className={classNames(
                    'z-[1] flex flex-col px-4 text-center',
                    'lg:text-start lg:w-[30.125rem] lg:px-0',
                    classes?.article,
                )}
            >
                <HeadingTag className={classNames('mb-5 font-bold md:text-2xl', classes?.heading)}>{heading}</HeadingTag>
                <p className={classNames('text-xxs md:text-sm mb-5', classes?.description)}>
                    {parse(description)}
                </p>
                <p className={classNames('text-xxs font-semibold italic md:text-sm', classes?.note)}>
                    {parse(note)}
                </p>
            </article>

            {isMobile
                && (
                    <div
                        className={classNames(isMobileXs ? 'mt-[32.5%]' : 'mt-[calc(5%*8)]')}
                    >
                        <div className="absolute bottom-0 aspect-[7/8] w-full object-cover">
                            <Image
                                alt={foregroundImageAlt}
                                className="h-auto w-full"
                                fill
                                src={foregroundImageSrc}
                            />
                        </div>
                    </div>
                )}
            <div className={classNames('grow relative flex w-full flex-col justify-end px-6 pb-6 md:h-auto md:justify-start lg:px-0 lg:max-w-md', classes?.buttonWrapper)}>
                <ButtonLink
                    classes={{
                        wrapper: classNames('w-full self-center md:mt-5 lg:w-[60%] md:self-start shadow-md', classes?.button),
                    }}
                    href={link}
                    variant={ButtonVariant.secondary}
                >
                    {linkCopy}
                </ButtonLink>
            </div>
        </section>
    );
};
