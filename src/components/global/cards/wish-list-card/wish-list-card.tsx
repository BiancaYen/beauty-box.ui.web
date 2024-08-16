import React from 'react';

// Components
import { Card } from '../card';

// Types
import { WishlistItem } from '../../../../../public/beauty-breeze/data';

type WishListCardProps = WishlistItem;

export const WishListCard = ({
    category,
    productName,
    ...rest
}: WishListCardProps) => (
    <Card
        className="group"
        variant="circle"
        {...rest}
    >
        <div className="absolute bottom-[1rem] left-1/2 flex -translate-x-1/2 flex-col items-center text-sm">
            <h2 className="w-max bg-primary-default-opacity-80 font-semibold transition-all group-hover:bg-tertiary-default">
                {productName}
            </h2>
            <h3 className="ml-2 w-max translate-y-[-0.3rem] bg-secondary-default-opacity-80 uppercase bg-blend-screen transition-all group-hover:bg-primary-default">
                {category}
            </h3>
        </div>
    </Card>
);
