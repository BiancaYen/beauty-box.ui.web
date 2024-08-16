import React from 'react';

// Types
type WarningIconProps = {
    fill?: string,
    height?: number | string,
    width?: number | string,
};

/* eslint-disable max-len */
export const WarningIcon: React.FC<WarningIconProps> = ({
    fill = 'var(--color-system-defaultTint1)',
    height = '18',
    width = '20',
}) => (
    <svg
        fill="none"
        height={height}
        viewBox="0 0 20 18"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            clipRule="evenodd"
            d="M19.5839 14.9013L11.7725 1.27737C11.2844 0.425117 10.6423 0 9.99821 0C9.3541 0 8.71199 0.425117 8.2239 1.27737L0.422556 14.9013C-0.563614 16.6058 0.236524 18 2.19686 18H17.7996C19.7599 18 20.56 16.6058 19.5839 14.9013ZM9.99821 6.86837C10.5605 6.86837 11.0164 7.32422 11.0164 7.88654V10.6171C11.0164 11.1795 10.5605 11.6353 9.99821 11.6353C9.43589 11.6353 8.98003 11.1795 8.98003 10.6172V7.88654C8.98003 7.32422 9.43589 6.86837 9.99821 6.86837ZM8.88602 13.6038C8.88602 14.2236 9.38486 14.726 10.0002 14.726L9.99821 14.728C10.2944 14.7285 10.5786 14.6103 10.7881 14.3993C10.9975 14.1884 11.1149 13.9021 11.1144 13.6038C11.1144 12.984 10.6156 12.4815 10.0002 12.4815C9.38486 12.4815 8.88602 12.984 8.88602 13.6038Z"
            fill={fill}
            fillRule="evenodd"
        />
    </svg>
);
