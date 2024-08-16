import React from 'react';
import { IconsProps } from '@/components/icons/icons';

/* eslint-disable max-len */
export const DiscoverIcon: React.FC<IconsProps> = ({
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
            d="m23 11.5-7.93-2.205 1.77-3.135-3.135 1.77L11.5 0 9.295 7.93 6.16 6.16l1.77 3.135L0 11.5l7.93 2.205-1.77 3.135 3.134-1.77L11.499 23l2.206-7.93 3.136 1.77-1.772-3.135L23 11.5zm-11.5 1.973a1.972 1.972 0 1 1 0-3.946 1.974 1.974 0 0 1 0 3.946z"
            fill={fill}
            fillRule="evenodd"
        />
    </svg>
);
