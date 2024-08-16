import React, { FC } from 'react';

type BookmarkCircleOutlinedIconProps = {
    fill?: string,
    height?: string,
    width?: string,
};

export const BookmarkCircleOutlinedIcon: FC<BookmarkCircleOutlinedIconProps> = ({
    fill = 'var(--color-default-white)',
    height = '34',
    width = '34',
}) => (
    <svg
        height={height}
        viewBox="0 0 34 34"
        width={width}
    >
        <defs>
            <linearGradient
                id="linearGradient-1"
                x1="50%"
                x2="50%"
                y1="0%"
                y2="100%"
            >
                <stop
                    offset="0%"
                    stopColor="#FFFFFF"
                />
                <stop
                    offset="100%"
                    stopColor="#FFFFFF"
                    stopOpacity="0"
                />
            </linearGradient>
        </defs>
        <g
            fillRule="evenodd"
            fill="none"
            strokeWidth="1"
            stroke="none"
        >
            <g transform="translate(0.4799, 0.5227)">
                <ellipse
                    cx="16.5201005"
                    cy="16.4772727"
                    fillOpacity="0.2"
                    fill="#000000"
                    rx="16.0201005"
                    ry="15.9772727"
                    stroke="url(#linearGradient-1)"
                />
                <path
                    d="M12.2236328,21.9796176 C12.2236328,21.4808993
                       12.2236328,12.7787051 12.2236328,12.3941836
                       C12.2236328,12.0096621 12.5478974,11.9748535
                       12.679657,11.9748535 C17.1512725,11.9768863
                       19.5386929,11.9748535 19.7655335,11.9748535
                       C20.1181183,11.9748535 20.2236667,12.1921267
                       20.2236667,12.4308505 C20.2236667,14.4517794
                       20.2236667,17.6347017 20.2236667,21.9796176
                       C20.2236667,22.4454684 19.7930603,22.5556216
                       19.4700318,22.2453951 C19.1470032,21.9351687
                       16.8157599,19.6605555 16.553833,19.4112429
                       C16.2919062,19.1619304 16.114625,19.1922092
                       15.8785095,19.4282092 C15.7393941,19.5672565
                       13.2008972,22.0282778 12.9402771,22.2785983
                       C12.679657,22.5289187 12.2236328,22.4783358
                       12.2236328,21.9796176 Z M13.7238196,13.4793857
                       L13.7238196,19.4282092 L14.8176802,18.3624183
                       C15.5481873,17.5956454 16.7876434,17.495563
                       17.6256044,18.3624183 L18.7171419,19.4282092
                       L18.7171419,13.4793857 L13.7238196,13.4793857 Z"
                    fillRule="nonzero"
                    fill={fill}
                    id="Shape"
                />
            </g>
        </g>
    </svg>
);
