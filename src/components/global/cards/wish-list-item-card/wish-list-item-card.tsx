import React from 'react';
import {
    IoMdLocate,
    IoIosClose,
} from 'react-icons/io';

// Components
import { Card } from '../card';

// Types
import { WishlistItem } from '../../../../../public/beauty-breeze/data';

type WishListCardProps = WishlistItem;

export const WishListItemCard = ({
    category,
    currency,
    productName,
    price,
    shop,
    ...rest
}: WishListCardProps) => (
    <li className="flex gap-4 w-full">
        <Card
            className="flex-[30%_0_0]" ratio="portrait"
            {...rest}
        />
        <div className="flex-[2_0_0] flex flex-col gap-1 justify-between overflow-hidden">
            <div className="flex flex-col gap-1">
                <h2 className="truncate font-bold min-w-0">
                    {productName}
                </h2>
                <p className="uppercase text-xs">
                    <span className="italic">Best price at </span>
                    {shop}
                </p>
                <p className="font-semibold">
                    {currency}
                    {' '}
                    {price}
                </p>
            </div>

        </div>
        <div className="flex flex-col justify-between">
            <div>
                <IoIosClose size="1.5rem" />
            </div>
            <div className="flex justify-end">
                <div className="flex justify-center items-center bg-default-black text-default-white rounded-full aspect-square w-6">
                    <IoMdLocate />
                </div>
            </div>
        </div>
    </li>
);
