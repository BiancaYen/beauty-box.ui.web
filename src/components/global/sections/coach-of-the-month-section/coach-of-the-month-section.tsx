import React, { FC } from 'react';

// Components
import { FeaturedCoachOfTheMonthCard, FeaturedCoachOfTheMonthCardProps } from '@/components/global/cards/featured/featured-coach-of-the-month-card';
// Types
interface CoachOfTheMonthSectionProps extends FeaturedCoachOfTheMonthCardProps {}

export const CoachOfTheMonthSection: FC<CoachOfTheMonthSectionProps> = ({
    backgroundImage,
    backgroundImageDesktop,
    category,
    coach,
    coachImage,
    coachImageDesktop,
    coachNameColor,
    description,
    heading,
    id,
    isBookmarkActive,
    link,
    linkCopy,
    subheading,
}) => (
    <section>
        <FeaturedCoachOfTheMonthCard
            backgroundImage={backgroundImage}
            backgroundImageDesktop={backgroundImageDesktop}
            category={category}
            coach={coach}
            coachImage={coachImage}
            coachImageDesktop={coachImageDesktop}
            coachNameColor={coachNameColor}
            description={description}
            heading={heading}
            id={id}
            isBookmarkActive={isBookmarkActive}
            link={link}
            linkCopy={linkCopy}
            subheading={subheading}
        />
    </section>
);

