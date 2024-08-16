import React, { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

// Icons
import { AddIcon } from '@/components/icons';

// Types
interface AddMoreCardProps {
    className?: string,
    copy?: string,
    href: string,
    variant?: 'coach' | 'content',
}

export const AddMoreCard: FC<AddMoreCardProps> = ({
    className = '',
    copy = 'Explore More',
    href,
    variant = 'coach',
}) => {
    const variantClasses = variant === 'coach' ? 'w-[11.25rem] h-[15.625rem] mt-[1.375rem]' : 'w-[15.625rem] aspect-[5/3] rounded-b-2xl';

    return (
        <Link
            className={classNames(
                'bg-system-default-tint-3  rounded-t-2xl cursor-pointer flex justify-center items-center flex-col gap-[0.625rem] text-xxs hover:bg-primary-tint-2',
                className,
                variantClasses,
            )}
            href={href}
        >
            <AddIcon
                fill="var(--color-primaryDefault)"
            />
            <p className="text-xxs font-bold text-primary-default">{copy}</p>
        </Link>
    );
};
