import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

// Components
import { Carousel } from '@/components/global/carousel';
import { CoachIntroductionCard, CoachIntroductionCardProps } from '@/components/global/cards/coach/coach-introduction-card';
import {
    Filters,
    FilterButtonCopyProps,
    FilterOptionsProps,
} from '@/components/global/filters';
import { SectionHeading2 } from '@/components/global/section-heading-2';

// Types
interface InterestsFilterSectionProps {
    buttonCopy: FilterButtonCopyProps,
    data: CoachIntroductionCardProps[],
    filterOptions: FilterOptionsProps[],
    headingDefault: string,
    headingResult: string,
    isFirstSection?: boolean,
}

export const InterestsFilterSection: FC<InterestsFilterSectionProps> = ({
    buttonCopy,
    data: dataProp,
    filterOptions,
    headingDefault,
    headingResult,
    isFirstSection = false,
}) => {
    const [data, setData] = useState(dataProp);
    const [isFetching, setIsFetching] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handlers
    const handleReset = () => {
        setIsFetching(false);
        setIsSubmitted(false);
        setData(dataProp);
    };

    const handleSubmit = (updatedFilters: string[]) => {
        setIsFetching(true);
        // eslint-disable-next-line no-console
        console.log(`Implement API request with ${updatedFilters.join(',')}`);
        // Todo mock isSubmitted for now
        setIsSubmitted(true);
    };

    return (
        <section
            className={classNames(
                'bg-systemDefault-tint-3 pb-6 md:pb-10',
                isFirstSection ? 'pt-11 md:pt-16' : 'pt-5 md:pt-10',
            )}
        >
            <SectionHeading2
                className="mb-4 md:mb-8"
                heading={!isSubmitted ? headingDefault : headingResult}
            />

            {isSubmitted && (
                <div className="w-full">
                    {data.length
                        ? (
                            <Carousel
                                hasFreeScroll
                                hasNavigationArrows={false}
                                isCenteredSlides
                                initialSlide={Math.round(data.length / 2)}
                            >
                                {data.map((item) => (
                                    <SwiperSlide
                                        key={item.id}
                                        className="!w-[18.5rem] xs:!w-[18.75rem]"
                                    >
                                        <CoachIntroductionCard
                                            {...item}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Carousel>
                        )
                        : (
                            <div>
                                { /* Todo implement error from api */ }
                                No Coaches found for the selected categories
                            </div>
                        )}
                </div>
            )}
            <Filters
                buttonCopy={buttonCopy}
                isFetching={isFetching}
                isSubmitted={isSubmitted}
                options={filterOptions}
                onReset={handleReset}
                onSubmit={handleSubmit}
            />
        </section>
    );
};
