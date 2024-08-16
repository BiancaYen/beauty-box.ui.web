import React, { FC } from 'react';

// Types
type CheckOutlinedIconProps = {
    fill?: string,
    height?: string,
    width?: string,
};

export const CheckOutlinedIcon: FC<CheckOutlinedIconProps> = ({
    fill = 'var(--color-primaryDefault)',
    height = '10',
    width = '14',
}: CheckOutlinedIconProps) => (
    <svg
        height={height}
        viewBox="0 0 13 10"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m11.099.7 1.187 1.163c-1.06 1.044-2.12 2.084-3.18
               3.124a3187.16 3187.16 0 0 0-3.617 3.554l-.548.539-.596-.486L.71
               5.618l1.072-1.264 3.052 2.501c.957-.942 1.915-1.882 2.872-2.821C8.838
               2.923 9.969 1.813 11.099.7z"
            fillRule="nonzero"
            fill="none"
            stroke={fill}
        />
    </svg>
);
