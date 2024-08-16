import { FC } from 'react';

// Components
import { ErrorCard, ErrorCardProps } from './error-card';

export const Error500Card: FC<Omit<ErrorCardProps, 'variant'>> = ({
    backgroundImageSrc,
    buttonCopy,
    copy,
    foregroundImageSrc,
    heading,
    onClick,
}) => (
    <ErrorCard
        backgroundImageSrc={backgroundImageSrc}
        buttonCopy={buttonCopy}
        copy={copy}
        foregroundImageSrc={foregroundImageSrc}
        heading={heading}
        variant={500}
        onClick={onClick}
    />
);
