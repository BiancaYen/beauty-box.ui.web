import React, { useState } from 'react';
import classNames from 'classnames';

// Components
import {
    CoachIntroductionCard,
    CoachIntroductionCardProps,
} from '@/components/global/cards/coach/coach-introduction-card';
import { Grid } from '@/components/global/grid';
import { Tabs, TabsItemProps } from '@/components/global/tabs';
import { SectionHeading2 } from '@/components/global/section-heading-2';

// Types
interface IntroducingCoachesTabsSectionProps {
    data: CoachIntroductionCardProps[],
    isFirstSection?: boolean,
    heading: string,
    tabsList: TabsItemProps[],
}

export const IntroducingCoachesTabsSection: React.FC<IntroducingCoachesTabsSectionProps> = ({
    data,
    isFirstSection = false,
    heading,
    tabsList,
}) => {
    const [filteredData, setFilteredData] = useState<CoachIntroductionCardProps[]>(data);

    const onTabToggleHandler = (id: string | number) => {
        if (id === 'all') {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter(({ categoryId }) => categoryId.toString().toLowerCase() === id.toString().toLowerCase()));
        }
    };

    return (
        <section
            className={classNames(
                'bg-default-white px-5 pb-5 md:pb-8',
                isFirstSection ? 'pt-14 md:pt-16 ' : 'pt-8 md:pt-10',
            )}
        >
            <SectionHeading2
                className="mb-3.5 md:mb-7 md:text-2xl"
                heading={heading}
            />
            <Tabs
                className="mb-6 md:mb-5"
                itemsList={tabsList}
                onActiveTabToggle={onTabToggleHandler}
            />
            <Grid
                className="min-h-[13.75rem]"
            >
                {
                    filteredData.map(({
                        backgroundImage,
                        backgroundImageHover,
                        book,
                        categoryColor,
                        categoryId,
                        courseTotalTime,
                        coach,
                        description,
                        id,
                        isBookmarkActive,
                        lessonCount,
                        link,
                        redirectCopy,
                        subheading,
                        subcategory,
                    }) => (
                        <CoachIntroductionCard
                            backgroundImage={backgroundImage}
                            backgroundImageHover={backgroundImageHover}
                            book={book}
                            categoryColor={categoryColor}
                            categoryId={categoryId}
                            coach={coach}
                            courseTotalTime={courseTotalTime}
                            description={description}
                            id={id}
                            isBookmarkActive={isBookmarkActive}
                            key={id}
                            lessonCount={lessonCount}
                            link={link}
                            redirectCopy={redirectCopy}
                            subheading={subheading}
                            subcategory={subcategory}
                        />
                    ))
                }
            </Grid>
        </section>
    );
};
