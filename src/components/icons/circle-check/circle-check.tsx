import React from 'react';

// Types
import { IconsProps } from '@/components/icons/icons';

/* eslint-disable max-len */
export const CircleCheckIcon: React.FC<IconsProps> = ({
    className,
    fill = '#00BF61',
    height = '21',
    width = '21',
}) => (
    <svg
        className={className}
        height={height}
        viewBox="0 0 21 21"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <circle
                cx="10.5"
                cy="10.5"
                r="10.5"
                fill={fill}
            />
            <path
                d="m14.923 6.21-6.257 6.338a.357.357 0 0 1-.505-.003l-1.864-1.888a1.232 1.232 0 0 0-1.743.01 1.254 1.254 0 0 0 0 1.761l3.107 3.147a1.072 1.072 0 0 0 1.517-.008l7.497-7.595a1.254 1.254 0 0 0 .11-1.634l-.121-.139a1.231 1.231 0 0 0-1.741.011z"
                fill="#FFF"
                fillRule="nonzero"
            />
        </g>
    </svg>
);
