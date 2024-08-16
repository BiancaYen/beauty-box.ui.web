import React from 'react';
import { IconsProps } from '@/components/icons/icons';

export const AddIcon: React.FC<IconsProps> = ({
    className = '',
    fill = '#E60000',
    height = '13px',
    width = '13px',
}) => (
    <svg
        className={className}
        height={height}
        viewBox="0 0 13 13"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d={`M6.5 0a1 1 0 0 1 1 1v4.499L12 
                5.5a1 1 0 0 1 0 2l-4.5-.001V12a1 
                1 0 0 1-2 0V7.499L1 7.5a1 1 0 1 
                1 0-2l4.5-.001V1a1 1 0 0 1 1-1z`}
            fill={fill}
            fillRule="evenodd"
        />
    </svg>
);
