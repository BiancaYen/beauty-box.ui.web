import React from 'react';

type SemiCircleIconProps = {
    fill?: string,
    height?: string,
    width?: string,
};

/* eslint-disable max-len */
export const SemiCircleIcon: React.FC<SemiCircleIconProps> = ({
    fill = 'var(--color-primary-default)',
    height = '100',
    width = '1--',
}) => (
    <svg>
        <clipPath id="circle" clipPathUnits="objectBoundingBox">
            <path d="M235 0.50037C235 65.3938 182.393 118 117.5 118C52.6065 118 0 65.3938 0 0.50037C117.5 0.50037 117.5 0.50037 235 0.50037Z" fill="white" />
        </clipPath>
    </svg>
);
