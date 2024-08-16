import classNames from 'classnames';
import Link from 'next/link';
import React, { ElementType } from 'react';

// Icons
import { CaretRightIcon } from '@/components/icons';
import { twMerge } from 'tailwind-merge';

// Types
export type ActionProps = {
    copy: string,
    href: string,
    icon?: ElementType,
    isHiddenDesktop?: boolean,
};

type SectionHeading1Variant = 'bold' | 'normal' | 'semi-bold';

interface SectionHeading1Props {
    action?: ActionProps,
    additionalInfo?: string,
    className?: string,
    heading: string,
    headingTag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    variant?: SectionHeading1Variant,
}

type SectionHeading1FontWeight = {
    [key in SectionHeading1Variant]: string;
};

// Styles
const fontWeight: SectionHeading1FontWeight = {
    bold: 'font-bold',
    normal: 'font-normal',
    'semi-bold': 'font-semibold',
};

export const SectionHeading1: React.FC<SectionHeading1Props> = ({
    action = {},
    additionalInfo,
    className = '',
    heading,
    headingTag: HeadingTag = 'h2',
    variant = 'semi-bold',
}) => {
    const {
        copy: actionCopy,
        href: actionHref = '',
        icon: Icon = CaretRightIcon,
        isHiddenDesktop = false,
    } = action;

    return (
        <div
            className={twMerge(
                classNames(
                    'flex items-center justify-between px-5 pt-10 pb-6',
                ),
                className,
            )}
        >
            <HeadingTag
                className={classNames(
                    'text-2xl',
                    fontWeight[variant],
                )}
            >
                {heading}
                {additionalInfo && (
                    <span className="align-super font-secondary text-lg">
                        {additionalInfo || ''}
                    </span>
                )}
            </HeadingTag>
            { actionCopy && (
                <Link
                    className={classNames(
                        'flex cursor-pointer items-center justify-end text-sm font-thin text-primary-default uppercase',
                        isHiddenDesktop && 'md:invisible',
                    )}
                    href={actionHref}
                >
                    <span>{actionCopy}</span>
                </Link>
            )}
        </div>
    );
};
