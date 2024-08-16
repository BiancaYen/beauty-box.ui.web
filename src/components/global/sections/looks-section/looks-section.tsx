'use client';

import React from 'react';

// Component
import { TabControl } from '@/components/global/tabs';
import { TabsUnderlined } from '@/components/global/tabs/tabs-underlined/tabs-underlined';
import { LooksTab } from '@/components/global/sections/looks-section/looks-tab/looks-tab';
import { WardrobeTab } from '@/components/global/sections/looks-section/wardrobe-tab/wardrobe-tab';
import { WishlistTab } from '@/components/global/sections/looks-section/wishlist-tab/wishlist-tab';

// Types
import {
    CategoryItem,
    LookItem,
    WardrobeCategoryItem,
    WishlistItem,
} from '../../../../../public/beauty-breeze/data';

interface LooksSectionProps {
    data: {
        categories: CategoryItem[],
        looks: LookItem[],
        wishlist: WishlistItem[],
        wardrobeCategories: WardrobeCategoryItem,
    },
}

export const LooksSection = ({ data }: LooksSectionProps) => (
    <section className="py-7">
        <TabControl
            items={[
                {
                    component: <LooksTab data={data.looks} />,
                    tab: 'Looks',
                    index: 1,
                },
                {
                    component: <WardrobeTab data={data.wardrobeCategories} />,
                    tab: 'Wardrobe',
                    index: 2,
                },
                {
                    component: <WishlistTab data={data.wishlist} tabItems={data.categories} />,
                    tab: 'Wishlist',
                    index: 3,
                },
            ]}
            tabComponent={TabsUnderlined}
        />
    </section>
);
