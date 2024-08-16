import React, { FC } from 'react';
import { IconsProps } from '@/components/icons/icons';

export const CaretLeftTallIcon: FC<IconsProps> = ({
    className,
    fill = 'var(--color-default-white)',
    height = '16',
    width = '9',
}) => (
    <svg
        className={className}
        height={height}
        viewBox="0 0 9 16"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d={`M8.655.348c.46.47.46 1.235 
                0 1.704L2.823 8l5.831 5.948c.46.47.46 
                1.235 0 1.704a1.145 1.145 0 0 
                1-1.642 0l-6.667-6.8a1.223 1.223 
                0 0 1 0-1.704l6.667-6.8A1.142 1.142 
                0 0 1 8.553.256l.102.092z`}
            fillRule="nonzero"
            fill={fill}
        />
    </svg>

);
