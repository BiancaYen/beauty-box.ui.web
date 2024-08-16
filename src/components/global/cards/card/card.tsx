import React, { ReactElement } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

// Components
import { CopyTag } from '@/components/global/tag';

interface CardProps {
    children?: ReactElement | string,
    className?: string,
    image: string,
    ratio?: 'square' | 'portrait',
    tagCopy: string,
    variant?: 'circle' | 'square',
}

// Styles
const ratioStyles = {
    portrait: 'aspect-portrait',
    square: 'aspect-square',
};

const variantStyles = {
    circle: 'rounded-full',
    square: 'rounded-3xl',
};

export const Card = ({
    children = '',
    className,
    image,
    ratio = 'square',
    tagCopy = '',
    variant = 'square',
}: CardProps) => (
    <div
        className={twMerge(classNames(
            'group relative w-full overflow-hidden rounded-3xl p-4 text-default-white shadow-card-1x ',
            'transition-all ease-linear hover:scale-[110%] hover:shadow-card-2x',
            ratioStyles[ratio],
            variantStyles[variant],
        ), className)}
    >
        {
            tagCopy && (
                <CopyTag className="absolute bottom-2 right-2 z-[2]" copy={tagCopy} />
            )
        }
        <div className="absolute inset-0">
            <Image
                alt="Image alt"
                className="object-cover"
                src={image}
                fill
            />
        </div>
        {children}
    </div>
);
