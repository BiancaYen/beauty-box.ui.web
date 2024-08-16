import React, { FC } from 'react';

type CaretRightTallIconProps = {
    className?: string,
    fill?:string,
    height?: string,
    width?: string,
};

export const CaretRightTallIcon: FC<CaretRightTallIconProps> = ({
    className = '',
    fill = 'var(--color-default-white)',
    height = '16',
    width = '9',
}: CaretRightTallIconProps) => (
    <svg
        className={className}
        height={height}
        viewBox="0 0 9 16"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d={`M.345.348c-.46.47-.46 
                1.235 0 1.704L6.177 8 .346 
                13.948c-.46.47-.46 1.235 
                0 1.704a1.145 1.145 0 0 0 
                1.642 0l6.667-6.8c.46-.47.46-1.235 
                0-1.704L1.988.348A1.142 1.142 
                0 0 0 .447.256L.345.348z`}
            fillRule="nonzero"
            fill={fill}
        />
    </svg>
);
