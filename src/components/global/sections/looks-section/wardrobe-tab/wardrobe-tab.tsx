'use client';

import React from 'react';

// Component
import { RowLink } from '@/components/global/row-link';

// Types
import { WardrobeCategoryItem } from '../../../../../../public/beauty-breeze/data';

// Types
interface WardrobeTabProps {
    data: WardrobeCategoryItem[],
}

export const WardrobeTab = ({ data }: WardrobeTabProps) => (
    <div className="w-full px-10">
        {
            data.map((item) => (
                <RowLink
                    key={item.link}
                    {...item}
                />
            ))
        }
    </div>
);
