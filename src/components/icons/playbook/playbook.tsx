import React, { FC } from 'react';

type PlaybookIconProps = {
    fill?: string,
};

export const PlaybookIcon: FC<PlaybookIconProps> = ({ fill = '#FFF' }) => (
    <svg
        height="8"
        viewBox="0 0 8 8"
        width="8"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M2.323 5.58h4.68V.614C7.003.55
        6.95.5 6.883.5h-4.68c-.663
        0-1.2.505-1.2 1.129v4.742c0 .624.537
        1.129 1.2 1.129h4.68c.066 0
        .12-.05.12-.113v-.339h-4.68c-.43 0-.78-
        .328-.78-.733a.71.71 0 0 1 .229-.52.803.803
        0 0 1 .551-.214zm1.38-3.374.6-.803.601.803
        1.02.275-.649.772.03.973L4.303 3.9l-1.001.
        326.03-.973-.649-.772 1.02-.275z"
            fillRule="nonzero"
            fill={fill}
        />
    </svg>
);

