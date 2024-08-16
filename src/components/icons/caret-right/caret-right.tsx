import React from 'react';

type CaretRightIconProps = {
    className?:string,
    fill?: string,
    height?: string,
    width?: string,
};

/* eslint-disable max-len */
export const CaretRightIcon: React.FC<CaretRightIconProps> = ({
    className = '',
    fill = 'var(--color-primaryDefault)',
    height = '8',
    width = '6',
}) => (
    <svg
        className={className}
        height={height}
        viewBox="0 0 6 8"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5.756 3.916a.623.623 0 0 0-.245-.399L1.531.423a.816.816 0 0 0-.513-.185.842.842 0 0 0-.535.17.607.607 0 0 0-.245.505l.013.095a.62.62 0 0 0 .193.326l3.428 2.665L.509 6.614a.61.61 0 0 0-.27.473.607.607 0 0 0 .244.505.842.842 0 0 0 .535.17.827.827 0 0 0 .525-.195l3.97-3.086a.611.611 0 0 0 .25-.47l-.007-.095z"
            fill={fill}
            fillRule="nonzero"
        />
    </svg>
);
