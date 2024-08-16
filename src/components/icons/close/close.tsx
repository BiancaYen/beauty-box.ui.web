import React from 'react';

// Types
import { IconsProps } from '@/components/icons/icons';

/* eslint-disable max-len */
export const CloseIcon: React.FC<IconsProps> = ({
    className = '',
    fill = 'var(--color-primaryDefault)',
    height = '11',
    width = '10',
}) => (
    <svg
        className={className}
        height={height}
        role="graphics-symbol"
        viewBox="0 0 10 11"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m1.483.712.061.058L5.01 4.454 8.536.834a.701.701 0 0 1 1.01 0 .748.748 0 0 1 .055.972l-.055.064L6 5.51 9.483 9.21a.747.747 0 0 1-.017 1.037.7.7 0 0 1-.949.04l-.061-.058L4.99 6.546l-3.526 3.62a.701.701 0 0 1-1.01 0A.748.748 0 0 1 .4 9.195l.055-.064 3.544-3.64-3.481-3.7A.747.747 0 0 1 .534.751a.7.7 0 0 1 .949-.04z"
            fill={fill}
            fillRule="nonzero"
        />
    </svg>
);
