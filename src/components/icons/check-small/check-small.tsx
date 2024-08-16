
import React, { FC } from 'react';

// Types
type CheckSmallIconProps = {
    fill?: string,
    height?: string,
    width?: string,
};

export const CheckSmallIcon: FC<CheckSmallIconProps> = ({
    fill = 'var(--color-defaultWhite)',
    height = '8',
    width = '9',
}: CheckSmallIconProps) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 9 8"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m7.514.888-4.38 4.436a.25.25 0 0 1-.353-.002L1.476
           4a.862.862 0 0 0-1.22.007.878.878 0 0 0 0 1.233L2.43
           7.443a.75.75 0 0 0 1.062-.006L8.74 2.121A.878.878 0 0 0
           8.818.977L8.733.88a.862.862 0 0 0-1.22.008z"
            fill={fill}
            fillRule="nonzero"
        />
    </svg>
);
