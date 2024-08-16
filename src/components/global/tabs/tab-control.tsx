
import React, {
    ElementType,
    FC,
    useContext,
    useRef,
    useState,
} from 'react';

// Components
import { SearchBar } from '@/components/global/search';
import { SectionMaxWidth } from '@/components/global/sections/layouts/section-max-width';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TabItem, TabToggle } from '@/components/global/tabs/tab-toggle';

// Context
import { SearchContext } from '@/components/providers/search-provider';

// Styling
import 'swiper/css';
import '../carousel/styles.css';

export interface TabControlProps {
    heading?: string,
    items: TabItem[],
    showSearch?: boolean,
    tabComponent?: ElementType,
}

export const TabControl: FC<TabControlProps> = ({
    heading,
    items,
    showSearch = false,
    tabComponent: TabComponent = TabToggle,
}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null);
    const [activeTabIndex, setActiveTab] = useState<number>(0);

    const { query, setQuery } = useContext(SearchContext);

    const onClick = (index: number) => {
        console.log('gets here');
        if (showSearch) {
            setQuery('');
        }
        swiperRef.current?.slideTo(index - 1);
    };

    return (
        <SectionMaxWidth>
            <div className="px-5 mb-3 flex w-full flex-col gap-3 align-middle md:min-h-[2.25rem] md:flex-row md:items-center md:justify-between">
                <div className="line-clamp-1 self-start overflow-hidden text-ellipsis md:w-[25%]">
                    {heading && heading.length > 0 ? <h2>{heading}</h2> : null}
                </div>
                <TabComponent
                    activeTabIndex={activeTabIndex}
                    items={items}
                    onClick={onClick}
                />
                <div className="md:min-w-[25%]">
                    {showSearch && (
                        <SearchBar
                            className="w-auto"
                            placeholder="Search"
                            value={query}
                            onChange={setQuery}
                        />
                    )}
                </div>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {items.map(({ index, component: Component }) => (
                    <SwiperSlide
                        data-selected={
                            index - 1 === activeTabIndex ? 'true' : undefined
                        }
                        key={index}
                        tabIndex={index}
                    >
                        {Component}
                    </SwiperSlide>
                ))}
            </Swiper>
        </SectionMaxWidth>
    );
};
