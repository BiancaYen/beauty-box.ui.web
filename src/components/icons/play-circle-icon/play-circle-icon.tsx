import React, { FC } from 'react';

type PlayCircleIconProps = {
    fill?: string,
    height?: string,
    width?: string,
};

export const PlayCircleIcon: FC<PlayCircleIconProps> = ({
    fill = 'var(--color-default-white)',
    height = '33',
    width = '33',
}) => (
    <svg
        height={height}
        viewBox="0 0 33 33"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <linearGradient
                id="playCircleIcon"
                x1="50%"
                x2="50%"
                y1="0%"
                y2="100%"
            >
                <stop stopColor="#FFF" offset="0%" />
                <stop
                    offset="100%"
                    stopColor="#FFF"
                    stopOpacity="0"
                />
            </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
            <circle
                stroke="url(#playCircleIcon)" fillOpacity=".2"
                fill="#000" cx="16.5"
                cy="16.5" r="16"
            />
            <path
                // eslint-disable-next-line max-len
                d="M14 13.232v7.536c0 .68.604 1.232 1.349 1.232.28 0 .554-.08.782-.229l5.02-3.266c.91-.592 1.122-1.746.473-2.577a1.945 1.945 0 0 0-.473-.433l-5.02-3.266c-.606-.395-1.449-.266-1.88.288a1.16 1.16 0 0 0-.251.715z"
                fill={fill}
            />
        </g>
    </svg>
);

