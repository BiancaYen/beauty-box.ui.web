'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

// Components
import {
    ButtonProps,
    ButtonVariant,
    getVariantClasses,
    sharedWrapperStyles,
} from '@/components/global/button';

import { CenteredContentWithIcon } from '@/components/global/centered-content-with-icon';

// Types
interface ButtonLinkProps extends Omit<Omit<ButtonProps, 'onClick'>, 'isLoading' | 'isDisabled'> {
    href: string,
}

export const ButtonLink: FC<ButtonLinkProps> = ({
    children,
    classes,
    href,
    icon,
    iconHeight = '8',
    iconWidth = '6',
    variant = ButtonVariant.primary,
}) => {
    const {
        background,
        iconColor,
        onHover,
        text,
    } = getVariantClasses(variant);

    return (
        <Link
            className={classNames(
                background,
                sharedWrapperStyles,
                text,
                `active:scale-95 cursor-pointer ${onHover}`,
                classes?.wrapper,
            )}
            href={href}
        >
            <CenteredContentWithIcon
                classes={{
                    icon: classes?.icon,
                }}
                fill={iconColor}
                icon={icon}
                iconHeight={iconHeight}
                iconWidth={iconWidth}
            >
                {children}
            </CenteredContentWithIcon>
        </Link>
    );
};
