import React, { FC } from 'react';

// Types
type CheckIconProps = {
    fill?: string,
    height?: string,
    stroke?:string,
    width?: string,
};

export const CheckIcon: FC<CheckIconProps> = ({
    fill = 'var(--color-default-white)',
    height = '10',
    stroke = 'none',
    width = '14',
}: CheckIconProps) => (
    <svg
        height={height}
        viewBox="0 0 14 10"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M11.802 0C9.706 2.064 7.608 4.12 5.508 6.184L2.424 3.655.704 5.682 4.732 8.98l.944.77.867-.852c2.385-2.348 4.772-4.684 7.16-7.036L11.803 0z"
            fill={fill}
            fillRule="nonzero"
            stroke={stroke}
        />
    </svg>
);
