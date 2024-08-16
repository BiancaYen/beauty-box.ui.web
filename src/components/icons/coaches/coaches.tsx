import React from 'react';
import { IconsProps } from '@/components/icons/icons';

/* eslint-disable max-len */
export const CoachesIcon: React.FC<IconsProps> = ({
    className = '',
    fill = '#E60000',
    height = '10',
    width = '10',
}) => (
    <svg
        className={className}
        fill={fill}
        height={height}
        width={width}
        viewBox="0 0 23 23"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M20.993 9.493v5.83a.73.73 0 0 1-1.46 0v-5.72l-8.54 4.88a.37.37 0 0 1-.38 0l-9.43-5.39a.38.38 0 0 1 0-.65l9.43-5.39a.37.37 0 0 1 .38 0l9.37 5.36c.39.22.63.632.63 1.08zm-3.78 3.11-6.12 3.5a.55.55 0 0 1-.58 0l-6.13-3.5a.58.58 0 0 0-.86.51v2.61a.58.58 0 0 0 .28.49l6.7 4a.59.59 0 0 0 .6 0l6.7-4a.58.58 0 0 0 .28-.49v-2.61a.58.58 0 0 0-.87-.51z"
            fill={fill}
            fillRule="evenodd"
        />
    </svg>
);
