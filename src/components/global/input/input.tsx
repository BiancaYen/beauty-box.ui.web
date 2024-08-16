import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

// Types
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string,
    hasCounter?: boolean,
    labelCopy: string,
    maxLength: number,
    value?: string,
}

export const Input: React.FC<InputProps> = ({
    className = '',
    error,
    hasCounter = true,
    id,
    labelCopy,
    placeholder = 'Type here',
    maxLength = 15,
    value,
    ...rest
}) => (
    <div className="w-full">
        <div className="relative text-xxs">
            <input
                {...rest}
                className={twMerge(classNames(
                    'peer/input',
                    'w-full bg-transparent border-b caret-primary-default',
                    'placeholder:text-transparent focus:placeholder:text-system-default-tint-1',
                    error ? 'border-primary-default' : 'border-primary-tint-1',
                    'outline-none focus:border-primary-default',
                    !!value?.length && 'is-dirty',
                ), className)}
                id={id}
                placeholder={placeholder}
                maxLength={maxLength}
                value={value}
            />
            <label
                className={classNames(
                    'pointer-events-none absolute inset-0 text-primary-tint-1 peer-focus/input:text-primary-default',
                    'transition-all duration-500 peer-focus/input:-translate-y-[100%]',
                    'peer-[.is-dirty]/input:-translate-y-[100%]',
                )}
                htmlFor={id}
            >
                {labelCopy}
            </label>
        </div>
        <div className="mt-px flex flex-row-reverse justify-between text-min font-medium">
            {hasCounter && (
                <span
                    className={classNames(
                        (value?.length || 0) > maxLength
                            ? 'text-primary-default'
                            : 'text-primary-tint-1',
                    )}
                >
                    {`${value?.length || 0}/${maxLength}`}
                </span>
            )}
            {error && (
                <span className="text-primary-default">{error}</span>
            )}
        </div>
    </div>
);

