import classNames from 'classnames';
import { FC } from 'react';

// Types
export type SkeletonLoaderProps = {
    className?: string,
    height?: string | number,
    width?: string | number,
};

export const SkeletonLoader: FC<SkeletonLoaderProps> = ({
    className = '',
    height,
    width,
}) => (
    <div
        className={classNames(
            'relative overflow-hidden',
            'before:animate-shimmer before:skew-x-neg45 before:blur-sm before:w-[50%] before:h-full',
            'before:bg-gradient-to-tl before:absolute before:from-transparent before:via-defaultWhite before:w-[250px] before:to-transparent before:blur-lg',
            className,
        )}
        style={{
            height: height || '1rem',
            width: width || '100%',
        }}
    />
);
