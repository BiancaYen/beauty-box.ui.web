import React from 'react';
import { IconsProps } from '@/components/icons/icons';

/* eslint-disable max-len */
export const BookmarkIcon: React.FC<IconsProps> = ({
    className,
    fill = 'var(--color-primaryDefault)',
    height = '11',
    width = '9',
}) => (
    <svg
        className={className}
        height={height}
        viewBox="0 0 9 11"
        width={width}
    >
        <path
            d="M.695.108h7.202a.4.4 0 0 1 .4.4v9.656a.399.399 0 0 1-.678.286L4.574 7.492a.399.399 0 0 0-.556 0L.973 10.45a.399.399 0 0 1-.677-.286V.507a.4.4 0 0 1 .4-.399z"
            fill={fill}
        />
    </svg>
);

