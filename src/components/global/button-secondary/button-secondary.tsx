import React, {
    FC,
    KeyboardEvent,
    ReactNode,
} from 'react';
import classNames from 'classnames';

// Types
type VariantPropType = 'primary' | 'secondary';

interface ButtonSecondaryProps {
    children: ReactNode,
    classes?: {
        icon?: string,
        innerWrapper?: string,
        wrapper? : string,
    },
    icon?: React.ElementType,
    iconFill?: string,
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
    disabled: 'text-system-default-tint-2',
    iconFill: 'var(--color-primaryDefault)',
    iconColorDisabled: 'var(--color-primaryTint1)',
    loadingGradient: '',
    onHover: 'hover:bg-primary-tint-2',
    text: 'text-system-default-default',
};

const getVariantClasses = (variant: VariantPropType) => {
    switch (variant) {
        case 'primary':
            return {
                ...baseClasses,
                loadingGradient: 'before:bg-gradient-to-r from-primary-default to-[#515C6C] transform rotate-98',
            };
        case 'secondary':
            return {
                ...baseClasses,
                afterBg: 'after:bg-transparent',
                background: 'bg-primary-default',
                loadingGradient: 'before:bg-gradient-to-r from-[#ED5B39] to-white transform rotate-98',
                disabled: 'bg-primary-tint-1',
                iconColorDisabled: 'var(--color-default-white)',
                iconFill: 'var(--color-default-white)',
                onHover: 'hover:bg-primary-shade-1',
                text: 'text-default-white',
            };
        default:
            return baseClasses;
    }
};

export const ButtonSecondary: FC<ButtonSecondaryProps> = ({
    children,
    classes = {
        icon: '',
        innerWrapper: '',
        wrapper: '',
    },
    icon: Icon,
    iconFill: iconFillProps,
    iconHeight = '14px',
    iconWidth = '14px',
    isDisabled = false,
    isLoading = false,
    variant = 'primary',
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
        iconColorDisabled,
        iconFill,
        loadingGradient,
        onHover,
        text,
    } = getVariantClasses(variant);

    return (
        <button
            className={classNames(
                'relative z-0 flex h-8 min-w-[8.5rem] items-center justify-start',
                'overflow-hidden rounded-[0.3125rem] px-3 py-2 text-xxs',
                background,
                text,
                isLoading && !isDisabled && `opacity-75 cursor-default 
                    before:block before:absolute before:z-[-2] 
                    before:left-[-50%] before:top-[-400%] before:h-[1000%] 
                    before:animate-spin
                    before:w-[200%] ${loadingGradient}
                    after:absolute after:z-[-1] after:left-[1px] 
                    after:top-[1px] after:w-[calc(100%-2px)] after:rounded-[0.3125rem] 
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
                <div className="flex items-center justify-center">
                    {Icon && (
                        <div
                            className={classNames(
                                'mr-2',
                                classes.innerWrapper,
                            )}
                        >
                            <Icon
                                className={classes.icon}
                                fill={isDisabled ? iconColorDisabled : iconFillProps || iconFill}
                                height={iconHeight}
                                width={iconWidth}
                            />
                        </div>
                    )}
                    <div>{children}</div>
                </div>
            )}
        </button>
    );
};
