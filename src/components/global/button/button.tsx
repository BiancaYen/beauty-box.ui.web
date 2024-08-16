import React, {
    FC,
    KeyboardEvent,
    ReactNode,
} from 'react';
import classNames from 'classnames';

// Components
import { CenteredContentWithIcon } from '@/components/global/centered-content-with-icon';

// Types
export enum ButtonVariant {
    primary = 'primary',
    secondary = 'secondary',
    tertiary = 'tertiary',
}

type VariantPropType = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps {
    children: ReactNode,
    classes?: {
        icon?: string,
        wrapper? : string,
    },
    icon?: React.ElementType,
    iconHeight?: string,
    iconWidth?: string,
    isDisabled?: boolean,
    isLoading?: boolean,
    variant?: VariantPropType,
    onClick: () => void,
}

const baseClasses = {
    afterBg: 'after:bg-default-white',
    background: 'bg-default-white',
    disabled: 'text-primary-tint-1',
    iconColor: 'var(--color-primaryDefault)',
    iconColorDisabled: 'var(--color-primaryTint1)',
    loadingGradient: '',
    onHover: 'hover:bg-primary-tint-2',
    text: 'text-primary-default',
};

export const getVariantClasses = (variant: VariantPropType) => {
    switch (variant) {
        case ButtonVariant.primary:
            return {
                ...baseClasses,
                loadingGradient: 'before:bg-gradient-to-r from-primary-default to-white transform rotate-98',
            };
        case ButtonVariant.secondary:
            return {
                ...baseClasses,
                loadingGradient: 'before:bg-gradient-to-r from-primary-default to-[#515C6C] transform rotate-98',
                disabled: 'text-system-default-tint-2',
                text: 'text-system-default-default',
            };
        case ButtonVariant.tertiary:
            return {
                ...baseClasses,
                afterBg: 'after:bg-transparent',
                background: 'bg-primary-default',
                disabled: 'bg-primary-tint-1',
                loadingGradient: 'before:bg-gradient-to-r from-[#ED5B39] to-white transform rotate-98',
                iconColor: 'var(--color-default-white)',
                iconColorDisabled: 'var(--color-default-white)',
                onHover: 'hover:bg-primary-shade-1',
                text: 'text-default-white',
            };
        default:
            return baseClasses;
    }
};

export const sharedWrapperStyles = 'relative z-0 flex h-9 w-[16.875rem] items-center justify-center overflow-hidden rounded-full px-4 py-2 text-xxs font-bold tracking-[0.0125rem]';

export const Button: FC<ButtonProps> = ({
    children,
    classes = {
        icon: '',
        wrapper: '',
    },
    icon,
    iconHeight = '8',
    iconWidth = '6',
    isDisabled = false,
    isLoading = false,
    variant = ButtonVariant.primary,
    onClick,
}) => {
    const handleClick = () => {
        if (isLoading || isDisabled) return;
        onClick();
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter') {
            handleClick();
        }
    };

    const {
        afterBg,
        background,
        disabled,
        loadingGradient,
        iconColor,
        iconColorDisabled,
        onHover,
        text,
    } = getVariantClasses(variant);

    return (
        <button
            className={classNames(
                background,
                sharedWrapperStyles,
                text,
                isLoading && !isDisabled && `opacity-75 cursor-default 
                    before:block before:absolute before:z-[-2] 
                    before:left[-50%] before:top-[-400%] before:h-[1000%] 
                    before:animate-spin
                    before:w-[200%] ${loadingGradient}
                    after:absolute after:z-[-1] after:left-[1px] 
                    after:top-[1px] after:w-[calc(100%-2px)] after:rounded-full 
                    after:h-[calc(100%-2px)] ${afterBg} ${disabled}`,
                isDisabled ? `${disabled} cursor-default` : 'shadow-button',
                !isLoading && !isDisabled && `active:scale-95 cursor-pointer ${onHover}`,
                classes.wrapper,
            )}
            tabIndex={0}
            type="button"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
        >
            {isLoading && !isDisabled ? (
                <div className="z-[1] pl-4">Loading...</div>
            ) : (
                <CenteredContentWithIcon
                    classes={{
                        icon: classes.icon,
                    }}
                    fill={isDisabled ? iconColorDisabled : iconColor}
                    icon={icon}
                    iconHeight={iconHeight}
                    iconWidth={iconWidth}
                >
                    {children}
                </CenteredContentWithIcon>
            )}
        </button>
    );
};
