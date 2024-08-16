import React, { FC } from 'react';
import classNames from 'classnames';

// Types
export interface ToggleProps {
    isDisabled?: boolean,
    label: string,
    labelAlignment?: 'left' | 'right',
    value: boolean,
    onChange: (isChecked: boolean) => void,
}

export const Toggle: FC<ToggleProps> = ({
    isDisabled = false,
    label,
    labelAlignment = 'right',
    value,
    onChange,
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!isDisabled) {
            const { checked } = event.target;
            onChange(checked);
        }
    };

    const getBackgroundColor = (): string => {
        if (isDisabled) {
            return value ? 'bg-primary-tint-1' : 'bg-system-default-tint-1';
        }
        return value ? 'bg-primary-default' : 'bg-default-black';
    };

    return (
        <label
            className={classNames(
                'flex w-max items-center',
                isDisabled ? 'cursor-default' : 'cursor-pointer',
                labelAlignment === 'right' && 'flex-row-reverse',
            )}
            htmlFor="toggle"
        >
            <input
                className="hidden"
                id="toggle"
                type="checkbox"
                checked={value}
                onChange={handleChange}
            />
            <span
                className={classNames(
                    'text-xxs',
                    labelAlignment === 'right' ? 'ml-2' : 'mr-2',
                )}
            >
                {label}
            </span>
            <div
                className={classNames(
                    'relative h-4 w-8',
                    'rounded-full duration-300',
                    isDisabled ? 'cursor-default' : 'cursor-pointer',
                    getBackgroundColor(),
                )}
            >
                <div
                    className={classNames(
                        'absolute top-px h-3.5 w-3.5 rounded-full bg-default-white duration-300',
                        isDisabled ? 'cursor-default' : 'cursor-pointer',
                        value ? 'left-px translate-x-0' : 'translate-x-full left-[0.1875rem]',
                    )}
                />
            </div>
        </label>
    );
};
