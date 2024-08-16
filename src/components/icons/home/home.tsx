import React from 'react';
import { IconsProps } from '@/components/icons/icons';

/* eslint-disable max-len */
export const HomeIcon: React.FC<IconsProps> = ({
    className = '',
    fill = '#E60000',
    height = '10',
    width = '10',
}) => (
    <svg
        className={className}
        height={height}
        width={width}
        viewBox="0 0 23 23"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m4.45 8.728 6.8-5.452a1.2 1.2 0 0 1 1.5 0l6.8 5.452a1.2 1.2 0 0 1 .45.936v9.503C20 20.18 19.204 21 18.222 21h-2.955a.6.6 0 0 1-.6-.6v-6.13a.6.6 0 0 0-.6-.6H9.933a.6.6 0 0 0-.6.6v6.13a.6.6 0 0 1-.6.6H5.778C4.796 21 4 20.18 4 19.167V9.664a1.2 1.2 0 0 1 .45-.936z"
            fill={fill}
            fillRule="evenodd"
        />
    </svg>
);
