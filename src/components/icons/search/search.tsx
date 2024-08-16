import React from 'react';

type SearchIconProps = {
    fill?: string,
    height?: number | string,
    width?: number | string,
};

/* eslint-disable max-len */
export const SearchIcon: React.FC<SearchIconProps> = ({
    fill = '#E60000',
    height = '8',
    width = '8',
}) => (
    <svg
        height={height}
        role="graphics-symbol"
        viewBox="0 0 16 16"
        width={width}
    >
        <path
            d="m14.722 14.359-2.87-2.905a6.922 6.922 0 0 0 1.735-4.578C13.587 3.086 10.54 0 6.794 0 3.048 0 0 3.085 0 6.876c0 3.79 3.048 6.876 6.794 6.876 1.33 0 2.561-.394 3.6-1.05l2.983 3.019a.94.94 0 0 0 .664.279.94.94 0 0 0 .665-.279.955.955 0 0 0 .016-1.362zM1.897 6.876c0-2.724 2.189-4.956 4.897-4.956 2.707 0 4.88 2.232 4.88 4.956s-2.189 4.956-4.88 4.956c-2.692 0-4.897-2.216-4.897-4.956z"
            fill={fill}
            fillRule="nonzero"
        />
    </svg>
);
