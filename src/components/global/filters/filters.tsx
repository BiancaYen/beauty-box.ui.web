import React, {
    useCallback,
    useState,
} from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

// Components
import { Button } from '@/components/global/button';
import { ClickableTag } from '@/components/global/clickable-tag';

// Icons
import { CaretRightIcon, SearchIcon } from '@/components/icons';

// Types
export interface FilterButtonCopyProps {
    default: string,
    newSearch: string,
    selected: string,
}

export interface FilterOptionsProps {
    copy: string,
    id: string | number,
}

export interface FiltersProps {
    activeFilterIds?: string[],
    buttonCopy: FilterButtonCopyProps,
    className?: string,
    isFetching?: boolean,
    isDisabled?: boolean,
    isLoading?: boolean,
    isSubmitted?: boolean,
    limit?: null | number,
    options: FilterOptionsProps[],
    tabItemClassName?: string,
    onReset: () => void,
    onSubmit: (activeOptionId: string[]) => void,
}

const baseFiltersStyle = 'flex pb-4 gap-x-1.5 gap-y-2.5 flex-wrap justify-center md:pb-8';
const loadingStyles = 'rounded-full h-6 select-none pointer-events-none bg-lg-neutral-light-114deg md:h-7';

export const Filters: React.FC<FiltersProps> = ({
    activeFilterIds: activeTabIdProps = [],
    buttonCopy,
    className,
    isFetching = false,
    isDisabled = false,
    isLoading = false,
    isSubmitted = false,
    limit: limitProp = null,
    options,
    tabItemClassName,
    onReset,
    onSubmit,
}) => {
    const {
        default: buttonCopyDefault,
        newSearch: buttonCopyNewSearch,
        selected: buttonCopySelected,
    } = buttonCopy;

    // Derived Data
    const limit = limitProp || options.length;

    // State
    const [activeOptionsIds, setActiveTabIds] = useState<string[]>(activeTabIdProps);

    // Callbacks
    const checkActiveIds = useCallback((id: string): boolean => activeOptionsIds.includes(id), [activeOptionsIds]);

    // Handlers
    const handleChange = (id: string) => {
        const updatedFilters = (!checkActiveIds(id) && activeOptionsIds.length < limit)
            ? [...activeOptionsIds, id]
            : activeOptionsIds.filter((filterId) => filterId !== id);
        setActiveTabIds(updatedFilters);
    };

    const handleReset = () => {
        setActiveTabIds([]);
        onReset();
    };

    const handleSubmit = () => {
        onSubmit(activeOptionsIds);
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center">
                <div className="mb-[0.3125rem] flex h-40 flex-col justify-center gap-[0.3125rem] pb-2.5 xs:h-[7.45rem] md:h-[8.5rem] lg:h-[7.75rem]">
                    <div className={twMerge(baseFiltersStyle, 'pb-0 mb-0')}>
                        <div className={classNames(loadingStyles, 'w-16', className)} />
                        <div className={classNames(loadingStyles, 'w-16', className)} />
                        <div className={classNames(loadingStyles, 'w-16', className)} />
                    </div>
                    <div className={twMerge(baseFiltersStyle, 'pb-0 mb-0')}>
                        <div className={classNames(loadingStyles, 'w-16', className)} />
                        <div className={classNames(loadingStyles, 'w-16', className)} />
                    </div>
                </div>
                <div className={twMerge(loadingStyles, 'h-8 w-64')} />
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="flex flex-col items-center pt-4 md:pt-8">
                <Button
                    variant="secondary"
                    icon={SearchIcon}
                    iconHeight="8"
                    iconWidth="8"
                    onClick={handleReset}
                >
                    <span className="font-bold">{buttonCopyNewSearch}</span>
                </Button>
            </div>
        );
    }

    return (
        <div className="mx-auto flex flex-col items-center px-9 md:max-w-[27.5rem] md:px-0 lg:max-w-[27.5rem] lg:px-0">
            <div
                className={classNames(
                    baseFiltersStyle,
                    className,
                )}
            >
                {!!options.length && options.map(({ copy, id }) => (
                    <ClickableTag
                        className={tabItemClassName}
                        id={id}
                        isActive={checkActiveIds(id.toString())}
                        isDisabled={isDisabled || isFetching}
                        key={id}
                        onClick={handleChange}
                    >
                        {copy}
                    </ClickableTag>
                ))}
            </div>
            <Button
                icon={activeOptionsIds.length ? CaretRightIcon : undefined}
                isDisabled={!activeOptionsIds.length || isDisabled}
                isLoading={isFetching}
                variant="secondary"
                onClick={handleSubmit}
            >
                {activeOptionsIds.length
                    ? (
                        <span className="flex items-center gap-0.5">
                            <span className="font-bold">{buttonCopySelected}</span>
                            <span className="font-normal">{`(${activeOptionsIds.length}/${limit})`}</span>
                        </span>
                    )
                    : (
                        <span>{buttonCopyDefault}</span>
                    )}
            </Button>
        </div>
    );
};

