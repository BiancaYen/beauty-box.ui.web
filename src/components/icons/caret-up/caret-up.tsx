import React, { FC } from 'react';

type CaretUpIconProps = {
    fill?:string,
    height?: string,
    width?: string,
};

export const CaretUpIcon: FC<CaretUpIconProps> = ({
    fill = 'var(--color-primaryDefault)',
    height = '6',
    width = '8',
}: CaretUpIconProps) => (
    <svg
        height={height}
        viewBox="0 0 8 6"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g
            fill="none"
            fillRule="evenodd"
        >
            <path
                d="M-292-226H28v593h-320z"
                fill="#FFF"
            />
            <path
                d={`M3.94.006a.623.623 0 0 0-.398.245
                    L.448 4.231a.816.816 0 0 0-.185.514
                    .842.842 0 0 0 .17.535c.126.16.31.253.505.244
                    l.095-.012a.62.62 0 0 0 .325-.193L4.024 1.89
                    l2.615 3.363a.61.61 0 0 0 .473.271
                    .607.607 0 0 0 .505-.244
                    .842.842 0 0 0 .17-.535
                    .827.827 0 0 0-.195-.526L4.506.25
                    A.611.611 0 0 0 4.036 0L3.94.006z`}
                fill={fill}
                fillRule="nonzero"
            />
        </g>
    </svg>
);
