import parse from 'html-react-parser';
import Link from 'next/link';
import React, { FC } from 'react';

// Components
import { ContentCarousel } from '@/components/global/carousels/content-carousel';
import { Paragraph } from '@/components/global/paragraph';
import { SectionHeading1, SectionHeading1ActionProps } from '@/components/global/section-heading-1';
import { SectionMaxWidth } from '@/components/global/sections/layouts/section-max-width';
import { SectionPlaceholder } from '@/components/global/section-placeholder';

// Types
import {
    ContentCardWithProfileAvatar,
    ContentCardWithProfileAvatarProps,
} from '@/components/global/cards/content/content-card-with-profile-avatar';

// Types
export interface ContentSectionProps {
    action?: SectionHeading1ActionProps,
    data: ContentCardWithProfileAvatarProps[],
    hasMoreCard?: boolean,
    heading: string,
    noData?: {
        copy: string,
        imageAlt: string,
        imageSrc: string,
        link: string,
    },
}

export const ContentSection: FC<ContentSectionProps> = ({
    action = {},
    data,
    hasMoreCard = false,
    heading,
    noData = {},
}) => {
    const hasData = data && data.length > 0;

    const {
        copy: actionCopy = '',
        isHiddenDesktop: isActionHiddenDesktop = false,
        link: actionLink = '',
    } = action;

    const {
        copy: noDataCopy = '',
        imageAlt: noDataImageAlt = '',
        imageSrc: noDataImageSrc = '',
        link: noDataLink = '',
    } = noData;

    const hasNoDataCard = !!noDataImageSrc;

    return (
        <SectionMaxWidth>
            <SectionHeading1
                {...hasData && { action: {
                    copy: actionCopy,
                    isHiddenDesktop: isActionHiddenDesktop,
                    link: actionLink,
                } }}
                heading={heading}
            />

            {!hasData && (
                <Paragraph className="pb-4 pt-2.5">
                    {parse(noDataCopy)}
                </Paragraph>
            )}

            {hasData && (
                <ContentCarousel
                    action={{
                        copy: actionCopy,
                        link: actionLink,
                    }}
                    data={data}
                    hasMoreCard={hasMoreCard}
                    slideComponent={ContentCardWithProfileAvatar}
                />
            )}

            {!hasData && hasNoDataCard && (
                <Link href={noDataLink}>
                    <SectionPlaceholder
                        imageAlt={noDataImageAlt}
                        imageSrc={noDataImageSrc}
                    />
                </Link>
            )}
        </SectionMaxWidth>
    );
};
