'use client';

import React, {useState} from 'react';

// Component
import { Grid } from '@/components/global/grid';
import { Tabs } from '@/components/global/tabs';
import { WishListItemCard } from '@/components/global/cards/wish-list-item-card';

// Types
import { CategoryItem, WishlistItem } from '../../../../../../public/beauty-breeze/data';
import {CoachIntroductionCardProps} from '@/components/global/cards/coach/coach-introduction-card';

interface LooksSectionProps {
    data: WishlistItem[],
    tabItems: CategoryItem[],
}

export const WishlistTab = ({
    data,
    tabItems,
}: LooksSectionProps) => {
    const [filteredData, setFilteredData] = useState<WishlistItem[]>(data);

    const handleActiveTabToggle = (id: string | number) => {
        console.log(id);
        if (id === 'all') {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter(({ category }) => category.toString().toLowerCase() === id.toString().toLowerCase()));
        }
    };

    return (
        <div>
            <Tabs
                className="mb-5 px-5"
                itemsList={tabItems}
                onActiveTabToggle={handleActiveTabToggle}
            />
            <Grid
                className="w-full px-5 py-2"
                columnsMobile={1}
                gapY={6}
            >
                {filteredData.filter((item, index) => index < 4).map((item) => (
                    <WishListItemCard
                        key={item.id}
                        {...item}
                    />
                ))}
            </Grid>
        </div>
    );
}
