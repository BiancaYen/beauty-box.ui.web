import React, { FC } from 'react';

type PlayIconProps = {
    fill?: string,
    height?: string,
    width?: string,
};

export const PlayIcon: FC<PlayIconProps> = ({
    fill = '#FFF',
    height = '0.5rem',
    width = '0.5rem',
}) => (
    <svg
        height={height}
        viewBox="0 0 8 8"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m6.441 4.532-4.139 2.6a.67.67
           0 0 1-.935-.232.714.714 0 0
           1-.1-.365v-5.2c0-.387.305-.7.68-.7.126
           0 .249.035.355.102l4.14 2.6a.711.711 0 0 1 0
           1.195z"
            fillRule="evenodd"
            fill={fill}
        />
    </svg>

);

