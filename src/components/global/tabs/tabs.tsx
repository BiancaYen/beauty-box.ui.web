import React, { useCallback, useState } from 'react';
import classNames from 'classnames';

// Components
import { ClickableTag } from '@/components/global/clickable-tag';

// Utils
import { useHorizontalSwipe } from '@/utils/use-horizontal-swipe';
import { Swiper, SwiperSlide } from 'swiper/react';

// Types
export interface TabsItemProps {
    copy: string,
    id: string | number,
}

interface TabsProps {
    activeFilterIds?: string,
    className?: string,
    isDisabled?: boolean,
    isLoading?: boolean,
    itemsList: TabsItemProps[],
    tabItemClassName?: string,
    onActiveTabToggle: (selectedTabId: string) => void,
}

// Styles
const baseTabsStyle = 'flex gap-[0.3125rem] flex-wrap justify-center md:gap-[0.625rem]';
const loadingStyles = 'rounded-full h-6 select-none pointer-events-none bg-lg-neutral-light-114deg md:h-7';

export const Tabs: React.FC<TabsProps> = ({
    activeFilterIds: activeTabIdProps = 'all',
    className,
    isDisabled = false,
    isLoading = false,
    itemsList,
    tabItemClassName,
    onActiveTabToggle,
}) => {
    const [activeTabIds, setActiveTabIds] = useState<string>(activeTabIdProps);

    const {
        wrapperRef,
        scrollingAreaRef,
        positionLeft,
    } = useHorizontalSwipe();

    const handleChange = useCallback((id: string) => {
        setActiveTabIds(id);
        onActiveTabToggle(id);
    }, [onActiveTabToggle]);

    if (isLoading) {
        return (
            <div className={classNames(baseTabsStyle, className)}>
                <div className={classNames(loadingStyles, 'w-8', tabItemClassName)} />
                <div className={classNames(loadingStyles, 'w-12', tabItemClassName)} />
                <div className={classNames(loadingStyles, 'w-20', tabItemClassName)} />
            </div>
        );
    }

    return (
        <div
            className={classNames(
                'relative whitespace-normal pb-2.5',
                className,
            )}
            ref={wrapperRef}
        >
            <div
                className={classNames(
                    'w-auto relative',
                    baseTabsStyle,
                )}
                ref={scrollingAreaRef}
                style={{ left: `${positionLeft}px` }}
            >
                <ClickableTag
                    className={tabItemClassName}
                    id="all"
                    isActive={activeTabIds === 'all'}
                    isDisabled={isDisabled}
                    key="all"
                    onClick={handleChange}
                >
                    All
                </ClickableTag>
                {!!itemsList.length && itemsList.map(({ copy, id }) => (
                    <ClickableTag
                        className={tabItemClassName}
                        id={id}
                        isActive={activeTabIds === id.toString()}
                        isDisabled={isDisabled}
                        key={id}
                        onClick={handleChange}
                    >
                        {copy}
                    </ClickableTag>
                ))}
            </div>
        </div>
    );
};
