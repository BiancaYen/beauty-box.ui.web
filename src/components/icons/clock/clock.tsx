import React, { FC } from 'react';

type ClockIconProps = {
    fill?: string,
    width?: string,
    height?: string,
};

export const ClockIcon: FC<ClockIconProps> = ({
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
            d={`M.649 4c0 1.93 1.57 3.5 3.5 
           3.5s3.5-1.57 3.5-3.5S6.079.5 
           4.149.5.649 2.07.649 4zm3.75 
           0a.25.25 0 0 1-.25.25h-2a.25.25 
           0 1 1 0-.5H3.9V2a.25.25 0 1 1 .5 
           0v2z`}
            fillRule="nonzero"
            fill={fill}
        />
    </svg>
);

