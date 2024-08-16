'use client';

import React, { FC } from 'react';

// Types
interface CoachWithCategoryProps {
    category: string,
    coach: string,
}

export const CoachWithCategory: FC<CoachWithCategoryProps> = ({
    category,
    coach,
}) => (
    <div>
        <p className="mb-2 w-[10rem] truncate text-sm font-bold underline">{category}</p>
        <p className="w-[10rem] truncate text-base font-bold">
            {coach}
        </p>
    </div>
);
